export class User {
  id: string;
  firstName?: string;
  lastName?: string;
  address?: string;
  email?: string;
  phoneNumber?: string;
  role?: string;
  verified?: boolean;

  constructor(
    id: string,
    firstName?: string,
    lastName?: string,
    address?: string,
    email?: string,
    phoneNumber?: string,
    role?: string,
    verified?: boolean
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.role = role;
    this.verified = verified;
  }
}
