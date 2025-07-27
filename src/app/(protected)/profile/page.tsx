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

  useEffect(() => {
    if (!user) return;
    const getAccountId = async () => {
      const { data, error } = await supabase.rpc("get_current_account_id");
      if (!error) setAccountId(data);
    };
    getAccountId();
  }, [user]);

  useEffect(() => {
    if (!accountId) return;
    const fetchProfiles = async () => {
      setLoadingProfiles(true);
      const { data, error } = await supabase
        .from("users")
        .select("id, name, gender, age_group")
        .eq("account_id", accountId);
      if (!error && data) setProfiles(data);
      setLoadingProfiles(false);
    };
    fetchProfiles();
  }, [accountId]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
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
    if (!error) {
      setForm({ name: "", gender: "", age_group: "" });
      const { data } = await supabase
        .from("users")
        .select("id, name, gender, age_group")
        .eq("account_id", accountId);
      if (data) setProfiles(data);
    }
    setSubmitting(false);
  };

  return (
    <main className="min-h-screen bg-[#0d1b16] text-white px-6 py-12">
      <div className="max-w-3xl mx-auto space-y-12">
        <section>
          <h1 className="text-3xl font-bold text-[#d0f0e9] mb-6">Profile</h1>
          <Card className="bg-[#121e1a] text-white border-[#1f2d29]">
            <CardHeader>
              <CardTitle className="text-[#cce7e1]">User Profile</CardTitle>
              <CardDescription>Your account information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label className="text-[#cce7e1]">Email</Label>
                <p className="text-sm text-muted-foreground">{user?.email}</p>
              </div>
              <div>
                <Label className="text-[#cce7e1]">User ID</Label>
                <p className="text-sm text-muted-foreground font-mono">{user?.id}</p>
              </div>
              <div>
                <Label className="text-[#cce7e1]">Created</Label>
                <p className="text-sm text-muted-foreground">
                  {user?.created_at ? new Date(user.created_at).toLocaleDateString() : "N/A"}
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="bg-[#121e1a] p-6 rounded-lg shadow-sm border border-[#1f2d29] space-y-4">
          <h2 className="text-xl font-semibold text-[#d0f0e9]">Profiles under your account</h2>
          {loadingProfiles ? (
            <p className="text-center text-muted-foreground">Loading profiles...</p>
          ) : profiles.length === 0 ? (
            <p className="text-center text-muted-foreground">No profiles found.</p>
          ) : (
            <ul className="space-y-3">
              {profiles.map((p) => (
                <li
                  key={p.id}
                  className="border border-[#2e423b] rounded-lg p-4 shadow-sm bg-[#1a2a25]"
                >
                  <p className="font-semibold text-white">{p.name}</p>
                  <p className="text-sm text-muted-foreground">
                    Gender: {p.gender}, Age Group: {p.age_group}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="bg-[#121e1a] p-6 rounded-lg shadow-sm border border-[#1f2d29] space-y-4">
          <h2 className="text-xl font-semibold text-[#d0f0e9]">Create a new profile</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-[#cce7e1]">Name</Label>
              <Input
                id="name"
                name="name"
                value={form.name}
                onChange={handleInputChange}
                required
                className="bg-[#1a2a25] border-[#2e423b] text-white"
              />
            </div>
            <div>
              <Label htmlFor="gender" className="text-[#cce7e1]">Gender</Label>
              <select
                id="gender"
                name="gender"
                value={form.gender}
                onChange={handleInputChange}
                required
                className="w-full bg-[#1a2a25] border border-[#2e423b] rounded-md px-3 py-2 text-sm text-white"
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <Label htmlFor="age_group" className="text-[#cce7e1]">Age Group</Label>
              <Input
                id="age_group"
                name="age_group"
                type="number"
                value={form.age_group}
                onChange={handleInputChange}
                required
                className="bg-[#1a2a25] border-[#2e423b] text-white"
              />
            </div>
            <div className="flex justify-end">
              <Button
                type="submit"
                disabled={submitting}
                className="bg-[#3be58f] text-black hover:bg-[#33d97f]"
              >
                {submitting ? "Creating..." : "Create Profile"}
              </Button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
