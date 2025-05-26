import AnimatedGreetingText from "@/components/AnimatedGreetingText";

export default function AvatarGreeting() {
  return (
      <div className="flex flex-col items-center space-y-6>">

        <img
            src="/avatar.jpg"
            alt="Nicole avatar"
            className="w-40 h-40 rounded-full shadow-lg object-cover object-top animate-float"
        />
          <AnimatedGreetingText />
      </div>
  );
}
