import React from "react";
import { motion } from "framer-motion";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ResourcesSectionCardProps {
    title: string;
    description?: string;
    imageUrl: string | StaticImageData;
    href: string;
    hasTwoButtons?: boolean; // Whether it should have two buttons
    buttonLabels?: string[]; // Custom labels for the buttons
    buttonLinks?: string[]; // Custom links for the buttons
}

const ResourcesSectionCard: React.FC<ResourcesSectionCardProps> = ({
    title,
    description,
    imageUrl,
    href,
    hasTwoButtons = false,
    buttonLabels = ["Explore"], // Default button label
    buttonLinks = [href], // Default link
}) => {
    return (
        <motion.div
        //   whileHover={{ scale: 1.05 }}
        //   whileTap={{ scale: 0.95 }}
        //   transition={{ type: "spring", stiffness: 300 }}
        >
            <Card className="flex h-full hover:border-[#01748D] overflow-hidden border-[#F18A00] rounded-none shadow-lg">
                {/* Left Side: Image */}
                <div className="w-1/3 h-full">
                    <Image
                        src={imageUrl}
                        alt={title}
                        className="object-cover w-full h-full p-3 rounded-md"
                    />
                </div>

                {/* Right Side: Content */}
                <div className="flex flex-col justify-between w-2/3">
                    {/* Title and Description */}
                    <div className="flex flex-col justify-center h-full">
                        <CardHeader>
                            <Link href={href}>
                                <CardTitle className="relative text-xl group">
                                    <span className="underline-offset-4 font-medium cursor-pointer transition-colors duration-200 group-hover:underline group-hover:text-[#F18A00]">
                                        {title}
                                    </span>
                                </CardTitle>
                            </Link>
                        </CardHeader>
                        <CardContent>
                            <p className="text-base text-slate-600 ">
                                {description}
                            </p>
                        </CardContent>
                    </div>

                    {/* Right Arrow Icon and Conditional Buttons */}
                    <CardFooter className="flex items-center justify-end gap-3">
                        {/* First Button */}
                        <Link href={buttonLinks[0]}>
                            <button className="px-3 py-1 text-base font-medium flex transition-all duration-300 transform rounded-md items-center gap-2 text-white bg-[#F18A00] hover:scale-105 hover:bg-[#01748D]">
                                {buttonLabels[0]}{" "}
                                <span className="text-xl">→</span>
                            </button>
                        </Link>

                        {/* Conditionally render the second button if `hasTwoButtons` is true */}
                        {hasTwoButtons && buttonLabels[1] && buttonLinks[1] && (
                            <Link href={buttonLinks[1]}>
                                <button className="px-3 py-1 text-xs font-medium flex transition-all duration-300 transform rounded-md items-center gap-2 text-white bg-[#01748D] hover:scale-105 hover:bg-[#F18A00]">
                                    {buttonLabels[1]}{" "}
                                    <span className="text-xl">→</span>
                                </button>
                            </Link>
                        )}
                    </CardFooter>
                </div>
            </Card>
        </motion.div>
    );
};

export default ResourcesSectionCard;
