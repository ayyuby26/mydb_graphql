export default async function Resolver(data, { password }) {
  return data['password'] == password;
}