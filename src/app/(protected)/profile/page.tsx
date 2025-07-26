"use client";

import { useAuth } from "@/contexts/AuthContext";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface UserProfile {
  id: number;
  name: string;
  gender: string;
  age_group: number;
}

export default function ProfilePage() {
  const { user } = useAuth();

  const [accountId, setAccountId] = useState<number | null>(null);
  const [profiles, setProfiles] = useState<UserProfile[]>([]);
  const [loadingProfiles, setLoadingProfiles] = useState(true);

  const [form, setForm] = useState({
    name: "",
    gender: "",
    age_group: "",
  });

  const [submitting, setSubmitting] = useState(false);

  // 获取当前 account_id
  useEffect(() => {
    if (!user) return;

    const getAccountId = async () => {
      const { data, error } = await supabase.rpc("get_current_account_id");
      if (error) {
        console.error("Error getting account ID:", error);
      } else {
        setAccountId(data);
      }
    };

    getAccountId();
  }, [user]);

  // 获取 profiles（用户列表）
  useEffect(() => {
    if (!accountId) return;

    const fetchProfiles = async () => {
      setLoadingProfiles(true);
      const { data, error } = await supabase
        .from("users")
        .select("id, name, gender, age_group")
        .eq("account_id", accountId);

      if (error) {
        console.error("Error loading profiles:", error);
      } else {
        setProfiles(data);
      }
      setLoadingProfiles(false);
    };

    fetchProfiles();
  }, [accountId]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!accountId) return;

    setSubmitting(true);
    const { error } = await supabase.from("users").insert({
      account_id: accountId,
      name: form.name,
      gender: form.gender,
      age_group: Number(form.age_group),
    });

    if (error) {
      console.error("Error creating profile:", error);
    } else {
      // 清空表单 & 刷新列表
      setForm({ name: "", gender: "", age_group: "" });
      const { data } = await supabase
        .from("users")
        .select("id, name, gender, age_group")
        .eq("account_id", accountId);
      setProfiles(data || []);
    }

    setSubmitting(false);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] p-8">
      <div className="max-w-2xl mx-auto space-y-12">
        <div>
          <h1 className="text-3xl font-bold mb-6">Profile</h1>
          <Card>
            <CardHeader>
              <CardTitle>User Profile</CardTitle>
              <CardDescription>Your account information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label className="text-sm font-medium">Email</Label>
                <p className="text-sm text-muted-foreground">{user?.email}</p>
              </div>
              <div>
                <Label className="text-sm font-medium">User ID</Label>
                <p className="text-sm text-muted-foreground font-mono">
                  {user?.id}
                </p>
              </div>
              <div>
                <Label className="text-sm font-medium">Created</Label>
                <p className="text-sm text-muted-foreground">
                  {user?.created_at
                    ? new Date(user.created_at).toLocaleDateString()
                    : "N/A"}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Profiles under your account</h2>
          {loadingProfiles ? (
            <p>Loading profiles...</p>
          ) : profiles.length === 0 ? (
            <p className="text-muted-foreground">No profiles found.</p>
          ) : (
            <ul className="space-y-2">
              {profiles.map((p) => (
                <li
                  key={p.id}
                  className="border border-gray-200 rounded-lg p-4 shadow-sm"
                >
                  <p className="font-semibold">{p.name}</p>
                  <p className="text-sm text-muted-foreground">
                    Gender: {p.gender}, Age Group: {p.age_group}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Create a new profile</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={form.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="gender">Gender</Label>
              <select
                id="gender"
                name="gender"
                value={form.gender}
                onChange={handleInputChange}
                required
                className="w-full border border-input bg-background rounded-md px-3 py-2 text-sm"
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <Label htmlFor="age_group">Age Group</Label>
              <Input
                id="age_group"
                name="age_group"
                type="number"
                value={form.age_group}
                onChange={handleInputChange}
                required
              />
            </div>
            <Button type="submit" disabled={submitting}>
              {submitting ? "Creating..." : "Create Profile"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
