// ErrorMessage.js
export default function ErrorMessage({
  errors,
  name,
}: {
  errors: { [key: string]: any } | undefined;
  name: string;
}) {
  return (
    <p
      className={`text-red-500  text-xs transition-all duration-300 ${
        errors && errors[name] ? "opacity-100" : "opacity-0"
      }`}
    >
      {errors && errors[name] && errors[name]["message"]}
    </p>
  );
}
