// Liskov substitution principle

class Person {

}

class Member extends Person {
    access() {
        console.log('У тебя есть доступ')
    }
}

class Guest extends Person {
    isGuest = true
}

class Frontend extends Member {
    canCreateFrontend() {

    }
}

class Backend extends Member {
    canCreateBackend() {

    }
}

class PersonFromDifferentCompany extends Guest {
    access() {
        throw new Error('У тебя нету доступа')
    }
}

function openSecureDoor(member) {
    member.access()
}

openSecureDoor(new Frontend())
openSecureDoor(new Backend())
// openSecureDoor(new PersonFromDifferentCompany()) // There should be member