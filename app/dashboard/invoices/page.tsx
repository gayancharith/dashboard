export default async function Page() {
  // await 1 second
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return <p>Invoices Page</p>;
}
