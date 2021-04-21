class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];

    }
    get title () {
        return this._title;
    }
    get isCheckedOut () {
        return this._isCheckedOut;
    }
    get ratings () {
        return this._ratings;
    }
    set isCheckedOut (value) {
        this._isCheckedOut = value;
    }
    getAverageRating () {
        let Sum = this._ratings.reduce((accumulator, rating) => accumulator + rating);
        let arrayLength = this._ratings.length;
        return Sum / arrayLength;
    }
    toggleCheckOutStatus() {
        this._isCheckedOut = !this.isCheckedOut;
    }
    addRating (rating) {
        if(rating <= 5) {
        this._ratings.push(rating);    
        } else {
            console.log('Rating have to be under 5')
        }
        
    }
    

    }
class Book extends Media {
    constructor(author, title, pages) {
        super (title);
        this._author = author;
        this._pages = pages;
    }

    get author () {
        return this._author;
    }
    get pages () {
        return this._pages;
    }  
}

class Movie extends Media {
    constructor (director, title, runTime) {
        super (title);
        this._director = director;
        this._runTime = runTime;
    }
    get director () {
        return this._director;
    }
    get runTime () {
        return this._runTime;
    }
}

class CD extends Media {
    constructor(artist, title, songs) {
        super (title);
        this._artist = artist;
        this._songs = songs;
    }
    get artist () {
        return this._artist;
    }
    get songs () {
        return this._songs;
    }

}

// instances
const novel = new Book('Fyodor Dostoyevski', 'Brothers Karamazov', 750 );
novel.toggleCheckOutStatus();
novel.addRating(5);
novel.addRating(3);
console.log(novel.isCheckedOut);
console.log(novel.getAverageRating());

const club = new Movie('David Fincher', 'The Fight Club', 151);
club.toggleCheckOutStatus();
club.addRating(5);
club.addRating(4);
console.log(club.isCheckedOut);
console.log(club.getAverageRating());

const Nirvana = new CD ('Nirvana', 'Nevermind', 'Smells like teen spirit', 'In Bloom', 'Come as you are');
Nirvana.toggleCheckOutStatus();
Nirvana.addRating(5);
Nirvana.addRating(4);

console.log(Nirvana.isCheckedOut);
console.log(Nirvana.getAverageRating())

