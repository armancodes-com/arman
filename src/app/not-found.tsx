import NotFoundLayout from "@/components/ui/NotFoundLayout";

export default function NotFound() {
  return (
    <NotFoundLayout
      title="error"
      subTitle="page not found"
      buttonLink="/"
      buttonTitle="back to home"
    />
  );
}
