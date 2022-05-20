//part 0ne and two
let site = {
    siteName: "W3Docs",
    bookName: "Javascript",

    get fullName(){
        return `Welcome to ${this.siteName}, ${this.bookName} book`
    },

    set fullName(value){
        return [this.SiteName, this.bookName] = value.split(" ");
    }
    };

site.fullName= "w3 CSS"
console.log(site.fullName);
console.log(site.bookName);
console.log(site.siteName);


// part three    
function Site(siteName, bookName) {
    
    this.siteName = siteName;
    this.bookName = bookName;

    Object.defineProperty(this, 'fullName', {
        get: function() {
            return `${this.siteName} ${this.bookName}`;
        },
        set: function(value) {
            return [this.SiteName, this.bookName] = value.split(" ");
        }

    })
}

let newSite = new Site('W3', 'CSS');
console.log(newSite.siteName);
console.log(newSite.bookName);

