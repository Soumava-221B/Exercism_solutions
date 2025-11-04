export class GradeSchool {
    _roster: Map<number, string[]>

    constructor() {
        this._roster = new Map<number, string[]>()
    }

    // Return the complete school list according to the grade
    roster() {
        return structuredClone(Object.fromEntries(this._roster))
    }

    // Assign students with grade
    add(name: string, grade: number) {
        this._roster.forEach((students, _) => {
            const index = students.indexOf(name);
            if (index !== -1) {
                students.splice(index, 1);
            }
        })

        if(!this._roster.has(grade)) {
            this._roster.set(grade, [])
        }
        this._roster.get(grade)!.push(name)
        this._roster.get(grade)!.sort()
    }

    grade(grade: number) {
        const students = this._roster.get(grade)
        return students == undefined? []: [...students]
    }
}