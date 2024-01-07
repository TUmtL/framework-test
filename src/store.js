import { defineStore } from "pinia";
export default defineStore('test', {
  state() {
    return {
      darkM:false,
      pics: [],
      author: [],
      locations: [],
      fName: '',
      fAuthor: {0:''},
      fLocation:{0:''},
      fTime: {
        start: '',
        end: ''
      },
      page:0,
      out:false
    }
  },
  actions: {

  },
  getters: {
    filtered() {
      return this.pics.filter((item) => {
        if (this.fName) return item.name.toLowerCase() === this.fName.toLowerCase()
        if (this.fAuthor[0]) return item.authorId === this.authorId
        if (this.fLocation[0]) return item.locationId === this.locationId
        if(this.fTime.end!= '' ||this.fTime.start != '') return item.created > this.fTime.start && item.created < this.fTime.end
        return this.pics
      })
    },
    count(){
    return this.page * 12},
    paginate(){
      const result = []
      for(let i = 0 + this.count ; i < 12 + this.count ; i++){
        if(this.filtered[i] != undefined) result.push(this.filtered[i])
        
      }
      return result
    },
    authorName(){
      const names = []
      this.author.forEach(item => names.push(item.name))
      return names
    },
    authorId(){
      return this.author.filter(item => item.name === this.fAuthor[0])[0]?.id
    },
    locationName(){
      const names = []
      this.locations.forEach(item => names.push(item.location))
      return names
    },
    locationId(){
      return this.locations.filter(item=> item.location === this.fLocation[0])[0]?.id
    },
    maxPage(){
      const raw = 35 / 12
      if(JSON.stringify(raw).split('.')[1] != '') return Number(JSON.stringify(raw).split('.')[0]) + 1
    }
  },
  
})