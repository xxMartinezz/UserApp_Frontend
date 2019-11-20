export class UserPage
{
    content: User[];
    totalElements: number;
    totalPages: number;

    constructor(content: User[], totalElements: number, totalPages: number) {
        this.content = content;
        this.totalElements = totalElements;
        this.totalPages = totalPages;
      }
}

export class User
{
    id: number;
    name: string;
    surname: string;
    pesel: string;
    date: string;

    constructor(name: string, surname: string, pesel: string, date: string)
    {
        this.name = name;
        this.surname = surname;
        this.pesel = pesel;
        this.date = date;
    }
}
