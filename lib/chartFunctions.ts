"use server";

import { createClient } from "@/utils/supabase/server";

export async function getTotalUsers() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("users")
    .select("id", { count: "exact" });

  if (error) return { success: false, msg: error.message };
  return { success: true, data: data.length };
}

export async function getVerifiedUsers() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("users")
    .select("id")
    .eq("role", "verified");

  if (error) return { success: false, msg: error.message };
  return { success: true, data: data.length };
}

export async function getCoachesNumber() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("users")
    .select("id")
    .eq("role", "coach");

  if (error) return { success: false, msg: error.message };
  return { success: true, data: data.length };
}

export async function getServicesNumber() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("users")
    .select("id")
    .eq("role", "service");

  if (error) return { success: false, msg: error.message };
  return { success: true, data: data.length };
}

export async function getMaleUsers() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("users")
    .select("id")
    .eq("gender", "male");

  if (error) return { success: false, msg: error.message };
  return { success: true, data: data.length };
}

export async function getFemaleUsers() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("users")
    .select("id")
    .eq("gender", "female");

  if (error) return { success: false, msg: error.message };
  return { success: true, data: data.length };
}

export async function getOtherGenderUsers() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("users")
    .select("id")
    .eq("gender", "other");

  if (error) return { success: false, msg: error.message };
  return { success: true, data: data.length };
}

export async function getUsersPerMonth() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("users")
    .select("created_at")
    .gte("created_at", `${new Date().getFullYear()}-01-01T00:00:00Z`) // Current year only
    .lte("created_at", `${new Date().getFullYear()}-12-31T23:59:59Z`)
    .order("created_at", { ascending: true });

  if (error) {
    console.error("Error fetching data:", error);
    return [];
  }

  // Group users by month
  const monthlyUserCount = Array(12).fill(0);
  data.forEach((user) => {
    const month = new Date(user.created_at).getMonth(); // 0-based index for months
    monthlyUserCount[month] += 1;
  });

  // Calculate cumulative sum of users
  let cumulativeCount = 0;
  const cumulativeData = monthlyUserCount.map((count, index) => {
    cumulativeCount += count;
    return {
      month: new Date(0, index).toLocaleString("default", { month: "short" }),
      cumulativeCount,
    };
  });

  return cumulativeData;
}

export async function getWaitlistUsers() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("waitlist")
    .select("id", { count: "exact" });

  if (error) return { success: false, msg: error.message };
  return { success: true, data: data.length };
}

export async function getWaitlistInfo() {
  const supabase = await createClient();

  const { data, error } = await supabase.from("waitlist").select("*");

  if (error) return { success: false, msg: error.message };
  return { success: true, data: data };
}