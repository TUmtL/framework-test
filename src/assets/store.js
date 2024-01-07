import { defineStore } from "pinia";
export default defineStore('test', {
  state() {
    return {
      pics: [],
      author: [],
      locations: [],
      fName: '',
      fAuthor: {'one':''},
      fLocation: {'one':''},
      fTime: {
        start: 0,
        end: 2024
      },
    }
  },
  actions: {

  },
  getters: {
    filtered() {
      return this.pics.filter((item) => {
        if (this.fName) return item.name === this.fName
        if (this.fAuthor.one) return item.authorId === this.authorId
        if (this.fLocation.one) return item.locationId === this.locationId
        return item.created > this.fTime.start && item.created < this.fTime.end
      })
    },
    authorName(){
      const names = []
      this.author.forEach(item => names.push(item.name))
      return names
    },
    authorId(){
      return this.author.filter(item => item.name === this.fAuthor.one)[0]?.id
    },
    locationName(){
      const names = []
      this.locations.forEach(item => names.push(item.location))
      return names
    },
    locationId(){
      return this.locations.filter(item=> item.location === this.fLocation.one)[0]?.id
    }
  },
  
})