import { cardio } from "ldrs";

cardio.register();

// Default values shown

export default function Spinner() {
  return (
    <div>
      <l-cardio size="50" stroke="4" speed="1" color="black"></l-cardio>;
    </div>
  );
}
