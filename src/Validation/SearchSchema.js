import * as z from "zod";

export const searchSchema = z.object({
  location: z.string({ message: "Location is required" }),
  checkInDate: z.string().date({ message: "CheckInDate is required" }),
  checkOutDate: z.string().date({ message: "CheckOutDate is required" }),
  guestCount: z.string({ message: "Number of guest is required" }),
});
