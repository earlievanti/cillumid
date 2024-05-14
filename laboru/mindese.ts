// Define a User type with some common attributes
type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

// Example array of users with type annotation
const usersArray: User[] = [
  { id: 1, name: 'Alice', email: 'alice@example.com', isActive: true },
  { id: 2, name: 'Bob', email: 'bob@example.com', isActive: false },
  // ... other users
];

// Function to add a new user to the array
function addUser(users: User[], newUser: User): User[] {
  return [...users, newUser];
}

// Function to find a user by ID
function findUserById(users: User[], userId: number): User | undefined {
  return users.find(user => user.id === userId);
}

// Function to activate a user
function activateUser(users: User[], userId: number): User[] {
  return users.map(user => 
    user.id === userId ? { ...user, isActive: true } : user
  );
}

// Function to deactivate a user
function deactivateUser(users: User[], userId: number): User[] {
  return users.map(user => 
    user.id === userId ? { ...user, isActive: false } : user
  );
}

// Example usage
const newUser: User = { id: 3, name: 'Charlie', email: 'charlie@example.com', isActive: true };
const updatedUsers = addUser(usersArray, newUser);
console.log(findUserById(updatedUsers, 1));
console.log(activateUser(updatedUsers, 2));
