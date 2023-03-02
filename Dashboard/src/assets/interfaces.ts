export interface Course {
    title: string,
    subject: string,
    grade: string,
    units: number,
    lessons: number,
    topics: number
    classOption: string[],
    students: number,
    startDate: string,
    endDate: string,
    profilePic: string,
    isFavorite: boolean,
    preview: boolean,
    manageCourse: boolean,
    gradeSubmissions: boolean,
    reports: boolean,
    isAlive: boolean
}


export interface DataObject {
    no_of_courses: number,
    courses: Course[]
}

export interface Notification{
    title: string,
    course: string,
    date: string,
    time: string,
    read: boolean
}

export interface NotificationObject{
    notifications: Notification[]
}

export interface Announcement{
    PA: string,
    title: string,
    date: string,
    time: string,
    course?: string,
    files?: string,
    read: boolean
}
export interface AnnouncementObject{
    announcements: Announcement[]
}