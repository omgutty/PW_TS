class TestUser {
  constructor(
    public username: string,
    public password: string,
    public role?: string
  ) {}

  showDetails(): void {
    console.log(`Username: ${this.username}`);
    console.log(`Password: ${this.password}`);
    console.log(`Role: ${this.role}`);
  }
}

class TestUserBuilder {
  private username!: string;
  private password!: string;
  private role?: string;

  setUsername(username: string): this {
    this.username = username;
    return this;
  }

  setPassword(password: string): this {
    this.password = password;
    return this;
  }

  setRole(role: string): this {
    this.role = role;
    return this;
  }

  build(): TestUser {
    return new TestUser(this.username, this.password, this.role);
  }
}


const user = new TestUserBuilder()
  .setUsername("admin_user")
  .setPassword("12345")
  .setRole("Admin")
  .build();

// Use the built object
user.showDetails();