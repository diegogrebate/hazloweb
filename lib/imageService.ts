"use server";

export const getUserImageSrc = (imagePath: string | null | undefined) => {
  if (typeof imagePath === "string" && imagePath.startsWith("file://")) {
    // Local URI, likely from the image picker
    return { uri: imagePath };
  } else if (typeof imagePath === "string" && imagePath) {
    // Remote URI, likely from Supabase storage
    return getFileFromBucket(imagePath);
  } else {
    // Default placeholder image
    return require("@/public/defaultUser.png");
  }
};

export const getFileFromBucket = (filePath: string) => {
  if (filePath) {
    return {
      uri: `${process.env.EXPO_PUBLIC_SUPABASE_URL}/storage/v1/object/public/uploads/${filePath}`,
    };
  }
  return null;
};
