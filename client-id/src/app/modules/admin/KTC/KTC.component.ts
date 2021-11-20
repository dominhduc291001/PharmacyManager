import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { MyDay } from 'app/core/models/my-day';
import { Notice } from 'app/core/models/notice';
import { DashboardService } from 'app/core/services/dashboard.service';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
@Component({
    selector: 'KTC',
    templateUrl: './KTC.component.html',
    styleUrls: ['./KTC.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class KTCComponent implements OnInit {
    //Month
    listMonth = [
        { key: '01', month: '1 월' },
        { key: '02', month: '2 월' },
        { key: '03', month: '3 월' },
        { key: '04', month: '4 월' },
        { key: '05', month: '5 월' },
        { key: '06', month: '6 월' },
        { key: '07', month: '7 월' },
        { key: '08', month: '8 월' },
        { key: '09', month: '9 월' },
        { key: '10', month: '10 월' },
        { key: '11', month: '11 월' },
        { key: '12', month: '12 월' }
    ];
    // Pie
    public pieChartOptions: ChartOptions = {
        legend: {
            position: 'bottom'
        },
        responsive: true,
    };
    public dataPie: number[] = [];
    public pieChartLabels: Label[] = ['형식승인신청현황', '검정 신청현황'];
    public pieChartData: SingleDataSet = this.dataPie;
    public pieChartType: ChartType = 'pie';
    public pieChartLegend = true;
    public pieChartPlugins = [];
    public pieChartColors: Array<any> = [{
        backgroundColor: ['rgb(135, 199, 242)', 'rgb(255, 161, 181)']
    }];
    //bar chart
    public barChartOptions: ChartOptions = {
        legend: {
            position: 'bottom'
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    stepSize: 1
                }
            }]
        },
        responsive: true,
    };
    public barChartLabels: Label[] = [];
    public barChartType: ChartType = 'bar';
    public barChartLegend = true;
    public barChartPlugins = [];
    public barChartData: ChartDataSets[] = [
        { data: [], label: '형식승인 완료 건수' },
        { data: [], label: '검정 완료 건수' },
        { data: [], label: '불법계량 신고 건수' }
    ];
    //table
    noticeData: Notice[] = [];
    /**
     * Constructor
     */
    constructor(private _dashboard: DashboardService) {
        monkeyPatchChartJsTooltip();
        monkeyPatchChartJsLegend();
    }

    ngOnInit(): void {
        this._dashboard.getNotice().subscribe((data) => {
            this.noticeData = data;
        });
        this._dashboard.getDougnutChart().subscribe((data) => {
            this.dataPie.push(data[0].fromCnt, data[0].athrzCnt);
        });
        this._dashboard.getBarChart(6).subscribe((data) => {
            this.ctrBarChart(data);
        });
    }

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    ctrBarChart(data: barChart[]) {
        const dateNow = new Date();
        let thisDay = new MyDay();
        if (dateNow.getMonth() === 11) {
            thisDay.month = '12';
            thisDay.year = dateNow.getFullYear().toString();
        }
        else {
            thisDay.month = (dateNow.getMonth() + 1).toString();
            if ((dateNow.getMonth() + 1) < 10) {
                thisDay.month = '0' + (dateNow.getMonth() + 1).toString();
            }
            else {
                thisDay.month = (dateNow.getMonth() + 1).toString();
            }
            thisDay.year = dateNow.getFullYear().toString();
        }

        for (let i = 0; i < 6; ++i) {
            if (this.checkMonth(thisDay, data) === true) {
                const res = this.checkResult(thisDay, data);
                this.barChartLabels.push(this.getMonthStr(thisDay.month));
                this.barChartData[0].data?.push(res.formConfirmCompleteCnt);
                this.barChartData[1].data?.push(res.inspectionConfirmCompleteCnt);
                this.barChartData[2].data?.push(res.unlawMeterRegisterCnt);
                thisDay = this.nextMonth(thisDay);
            }
            else {
                this.barChartLabels.push(this.getMonthStr(thisDay.month));
                this.barChartData[0].data?.push(0);
                this.barChartData[1].data?.push(0);
                this.barChartData[2].data?.push(0);
                thisDay = this.nextMonth(thisDay);
            }
        }
        this.barChartLabels.reverse();
        this.barChartData[0].data?.reverse();
        this.barChartData[1].data?.reverse();
        this.barChartData[2].data?.reverse();
    }

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    nextMonth(thisDay: MyDay) {
        const result = thisDay;
        if (thisDay.month === '01') {
            result.month = '12';
            result.year = (parseInt(result.year, 10) - 1).toString();
        }
        else {
            for (let i = 1; i < 12; ++i) {
                if (thisDay.month === this.listMonth[i].key) {
                    result.month = this.listMonth[i - 1].key;
                }
            }
        }
        return result;
    }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    checkMonth(thisDay: MyDay, allBarItem: barChart[]) {
        let result = false;
        allBarItem.forEach((s) => {
            if (thisDay.month === s.month && thisDay.year === s.year) {
                result = true;
            }
        });
        return result;
    }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    checkResult(thisDay: MyDay, allBarItem: barChart[]) {
        let result = allBarItem[0];
        allBarItem.forEach((s) => {
            if (thisDay.month === s.month && thisDay.year === s.year) {
                result = s;
            }
        });
        return result;
    }
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    getMonthStr(thisMonth: string) {
        for (const item of this.listMonth) {
            if (item.key === thisMonth) {
                return item.month;
            }
        }
        return 'null';
    }
}

// eslint-disable-next-line @typescript-eslint/naming-convention
interface barChart {
    formConfirmCompleteCnt: number;
    inspectionConfirmCompleteCnt: number;
    unlawMeterRegisterCnt: number;
    month: string;
    year: string;
}
