// types.ts

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  middleName: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: string;
  hireDate: string;
  jobTitle: string;
  departmentId: number;
  userName: string;
  password: string;
  department?: string;
  user?: string;
}

export interface Department {
  id: number;
  name: string;
  description: string;
}

export interface Supplier {
  id?: number;
  name: string;
  address: string;
  contactNumber: string;
  email: string;
  notes: string;
}
