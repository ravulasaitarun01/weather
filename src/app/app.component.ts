import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather';
  load = false;
  city:any;
  cityName:string = '';
  temp:any[] = [];
  day:any[] = [];
  constructor(private h:HttpClient){}
  loadData(){
    this.h.get(`https://api.openweathermap.org/data/2.5/forecast?q=${this.cityName}&appid=5aac677d8bdf1b1c517aa7041a47aab8&units=metric`).subscribe((res)=>{
      this.load=true;
      this.city =  res;
      for(var i=0;i<40;i+=8){
        var num = this.city.list[i].main.temp;
        var date = this.city.list[i].dt_txt;
        var day = date.split(" ")[0];
        this.temp.push(num);
        this.day.push(day);
      }
    })
  }
}
