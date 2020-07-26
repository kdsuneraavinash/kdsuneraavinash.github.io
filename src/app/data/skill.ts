export class Skill {
    static URL = 'http://localhost:8000/skills.json';

    constructor(public image: string, public link: string, public progress: number,
        public title: string, public group: string) {
    }

    static compare(a: Skill, b: Skill): number {
        return b.progress - a.progress;
    }
}

export class SkillGroup {
    constructor(public title: string, public skills: Skill[]) {
    }
}
