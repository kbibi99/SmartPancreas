import {Component, ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';
//noinspection TypeScriptCheckImport
import { Chart } from 'chart.js';
import {Http,Response} from '@angular/http'
import {Observable} from "rxjs";

@Component({
    selector: 'page-mesure',
    templateUrl: 'mesure.html'
})
export class MesurePage {
    @ViewChild('barCanvas') barCanvas;
    barChart: any;
    glucagon:number;
    insuline:number;
    glucose:number;
    constructor(public navCtrl: NavController  , public  http:Http) {
        http.get("http://192.168.1.63:8080/getlast").subscribe(data=>{
            data=data.json()
            console.log(data[0].id)
            this.glucagon=data[0].glucagon
            this.insuline=data[0].insuline
            this.glucose=data[0].glucose

            console.log(this.glucagon);
            console.log(this.insuline);
            console.log(this.glucose);
            this.ionViewDidLoad()
        })
        Observable.interval(2000)
            .takeWhile(() => true)
            .subscribe(i => {
        http.get("http://192.168.1.63:8080/getlast").subscribe(data=>{
            data=data.json()
            console.log(data[0].id)

            if((this.glucagon!=data[0].glucagon)||(this.insuline!=data[0].insuline)||(this.glucose!=data[0].glucose))
            {  this.glucagon=data[0].glucagon
            this.insuline=data[0].insuline
            this.glucose=data[0].glucose
                this.ionViewDidLoad()

            }

        })
            });

    }
    ionViewDidLoad() {

        this.barChart = new Chart(this.barCanvas.nativeElement, {

            type: 'bar',
            data: {
                labels: ["Insuline", "Glucacon", "Glucose"],
                datasets: [{
                    label: '',
                    data: [this.insuline, this.glucagon, this.glucose],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }

        });


    // /*ionViewDidLoad() {
    //
    //     this.barChart = new Chart(this.barCanvas.nativeElement, {
    //
    //         type: 'bar',
    //         data: {
    //             labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    //             datasets: [{
    //                 label: '# of Votes',
    //                 data: [12, 19, 3, 5, 2, 3],
    //                 backgroundColor: [
    //                     'rgba(255, 99, 132, 0.2)',
    //                     'rgba(54, 162, 235, 0.2)',
    //                     'rgba(255, 206, 86, 0.2)',
    //                     'rgba(75, 192, 192, 0.2)',
    //                     'rgba(153, 102, 255, 0.2)',
    //                     'rgba(255, 159, 64, 0.2)'
    //                 ],
    //                 borderColor: [
    //                     'rgba(255,99,132,1)',
    //                     'rgba(54, 162, 235, 1)',
    //                     'rgba(255, 206, 86, 1)',
    //                     'rgba(75, 192, 192, 1)',
    //                     'rgba(153, 102, 255, 1)',
    //                     'rgba(255, 159, 64, 1)'
    //                 ],
    //                 borderWidth: 1
    //             }]
    //         },
    //         options: {
    //             scales: {
    //                 yAxes: [{
    //                     ticks: {
    //                         beginAtZero:true
    //                     }
    //                 }]
    //             }
    //         }
    //
    //     });

    }
}
