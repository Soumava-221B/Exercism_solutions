//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  constructor() {
    this.grades = {};
  }

  roster() {
    return Object.keys(this.grades)
      .sort((a, b) => Number(a) - Number(b)) 
      .flatMap(grade => [...this.grades[grade]]);
  }

  add(name, grade) {
    if (Object.values(this.grades).some(students => students.includes(name))) {
      return false;
    }

    if (!this.grades[grade]) this.grades[grade] = [];
    this.grades[grade].push(name);
    this.grades[grade].sort(); 

    return true;
  }

  grade(grade) {
    return this.grades[grade] ? [...this.grades[grade]] : [];
  }
}
