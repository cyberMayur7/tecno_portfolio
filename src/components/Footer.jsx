import { useEffect, useState } from "react";

const Footer = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date(
        new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
      );

      setTime(
        now.toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  // Availability: 9 AM – 7 PM IST
  const hour = Number(time.split(":")[0]);
  const isAvailable = hour >= 9 && hour < 19;

  return (
    <footer className="border-t border-white/10 py-6 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-gray-400 gap-2">

        {/* Left */}
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-medium">
            Mayur Girase
          </span>
        </p>

        {/* Center */}
        <p className="text-sm">
          Cybersecurity • Cloud Security • Networking
        </p>

        {/* Right – Live Time + Status */}
        <div className="flex items-center gap-3 text-sm">
          <span>IST {time}</span>
          <span
            className={`h-2.5 w-2.5 rounded-full ${
              isAvailable ? "bg-green-400" : "bg-gray-500"
            }`}
          />
          <span className={isAvailable ? "text-green-400" : "text-gray-500"}>
            {isAvailable ? "Available" : "Offline"}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
