import {Component, Input, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {TooltipPosition} from "@angular/material/tooltip";
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: ['h1{color:red;font-weight:bold}', 'h2{color:blue}']
})
export class AppComponent implements OnInit{

  @Input() contents: any;
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.http.get("https://6267b6cb786383364223baa5.mockapi.io/ebid/ebidData").subscribe(data => {
      console.log(data);
      this.contents = data;
    });
  }
  // ngOninit() {
  //
  //   console.log('https://6267b6cb786383364223baa5.mockapi.io/ebid/:endpoint');
  // }

  contents1 = [
    {
      "id": "14c99a04-a541-450a-9960-1209c13130d6",
      "planNo": "PL2200000473",
      "planVersion": "00",
      "name": "1",
      "planType": "DTPT",
      "status": "01",
      "investorCode": "vn0123456789555",
      "investTotalUnit": "VND",
      "investTotal": 1000000000,
      "createdDate": "2022-04-25T09:27:13.906",
      "publicDate": "2022-04-25T09:29:02.591",
      "createdBy": "vn0123456789555-16",
      "bidPack": 1,
      "numPack": 1,
      "numLinkedPack": 1,
      "approvalStatus": "01"
    },
    {
      "id": "cd19e968-c8e0-496c-94e2-95e723d5c366",
      "planNo": "PL2200000468",
      "planVersion": "00",
      "name": "H test mở sơ tuyển",
      "planType": "TX",
      "status": "01",
      "investorCode": "vn0123456789555",
      "investTotalUnit": "VND",
      "investTotal": 10000000,
      "createdDate": "2022-04-20T19:57:35.387",
      "publicDate": "2022-04-20T19:58:34.866",
      "createdBy": "vn0123456789555-16",
      "bidPack": 1,
      "numPack": 1,
      "numLinkedPack": 1,
      "approvalStatus": "01"
    },
    {
      "id": "6750d180-8217-49dd-b7ff-599f9bc7f38d",
      "planNo": "PL2200000467",
      "planVersion": "00",
      "name": "3123",
      "planType": "TX",
      "status": "01",
      "investorCode": "vn0123456789555",
      "investTotalUnit": "VND",
      "investTotal": 1311232,
      "createdDate": "2022-04-20T19:31:01.356",
      "publicDate": "2022-04-20T19:33:50.437",
      "createdBy": "vn0123456789555-16",
      "bidPack": 1,
      "numPack": 1,
      "numLinkedPack": 1,
      "approvalStatus": "01"
    },
    {
      "id": "5e4e98c5-465e-46b2-aff4-386deab92d96",
      "planNo": "PL2200000464",
      "planVersion": "00",
      "name": "1",
      "planType": "DTPT",
      "status": "01",
      "investorCode": "vn0123456789555",
      "investTotalUnit": "VND",
      "investTotal": 1000000000,
      "createdDate": "2022-04-20T15:08:08.3",
      "publicDate": "2022-04-20T15:09:00.33",
      "createdBy": "vn0123456789555-16",
      "bidPack": 1,
      "numPack": 1,
      "numLinkedPack": 1,
      "approvalStatus": "01"
    }, {
      "id": "96807470-e6cd-4fe7-b86d-24147653de13",
      "planNo": "PL2200000462",
      "planVersion": "00",
      "name": "123",
      "planType": "TX",
      "status": "01",
      "investorCode": "vn0123456789555",
      "investTotalUnit": "VND",
      "investTotal": 123,
      "createdDate": "2022-04-20T11:17:25.296",
      "publicDate": "2022-04-20T11:18:47.38",
      "createdBy": "vn0123456789555-16",
      "bidPack": 1,
      "numPack": 1,
      "numLinkedPack": 1,
      "approvalStatus": "01"
    }, {
      "id": "55a443b3-05f1-4f07-aad7-ab1bebd2abeb",
      "planNo": "PL2200000461",
      "planVersion": "00",
      "name": "1",
      "planType": "DTPT",
      "status": "01",
      "investorCode": "vn0123456789555",
      "investTotalUnit": "VND",
      "investTotal": 1000000000,
      "createdDate": "2022-04-20T08:56:54.68",
      "publicDate": "2022-04-20T08:57:50.834",
      "createdBy": "vn0123456789555-16",
      "bidPack": 1,
      "numPack": 1,
      "numLinkedPack": 1,
      "approvalStatus": "01"
    }, {
      "id": "463fb9d7-52a1-4ff3-9092-02eafbd2c174",
      "planNo": "PL2200000459",
      "planVersion": "00",
      "name": "1",
      "planType": "KHAC",
      "status": "01",
      "investorCode": "vn0123456789555",
      "investTotalUnit": "VND",
      "investTotal": 1,
      "createdDate": "2022-04-19T14:47:22.104",
      "publicDate": "2022-04-19T14:48:21.406",
      "createdBy": "vn0123456789555-16",
      "bidPack": 1,
      "numPack": 1,
      "numLinkedPack": 1,
      "approvalStatus": "01"
    }, {
      "id": "6a71d7a2-c5cd-41a5-abd8-573efc777875",
      "planNo": "PL2200000458",
      "planVersion": "00",
      "name": "1",
      "planType": "KHAC",
      "status": "01",
      "investorCode": "vn0123456789555",
      "investTotalUnit": "VND",
      "investTotal": 1,
      "createdDate": "2022-04-18T16:24:19.461",
      "publicDate": "2022-04-18T16:25:24.406",
      "createdBy": "vn0123456789555-16",
      "bidPack": 1,
      "numPack": 1,
      "numLinkedPack": 0,
      "approvalStatus": "01"
    }, {
      "id": "79bd16d1-43a0-4e38-ba50-fe84d7ba976e",
      "planNo": "PL2200000457",
      "planVersion": "00",
      "name": "100",
      "planType": "DTPT",
      "status": "01",
      "investorCode": "vn0123456789555",
      "investTotalUnit": "VND",
      "investTotal": 1000000000,
      "createdDate": "2022-04-18T15:58:54.246",
      "publicDate": "2022-04-18T16:00:22.943",
      "createdBy": "vn0123456789555-16",
      "bidPack": 1,
      "numPack": 1,
      "numLinkedPack": 1,
      "approvalStatus": "01"
    }, {
      "id": "70e01765-eeec-4271-a357-6ba2dab1eacc",
      "planNo": "PL2200000456",
      "planVersion": "00",
      "name": "giang yest KH chi dtpt",
      "planType": "DTPT",
      "status": "01",
      "investorCode": "vn0123456789555",
      "investTotalUnit": "VND",
      "investTotal": 1000000000,
      "createdDate": "2022-04-18T15:36:16.842",
      "publicDate": "2022-04-18T15:37:04.535",
      "createdBy": "vn0123456789555-16",
      "bidPack": 1,
      "numPack": 1,
      "numLinkedPack": 1,
      "approvalStatus": "01"
    }
  ]

  // "SEARCH_FORM": {
  //   "title: "Thông báo",
  //   "notifyType": "Vốn tài trợ",
  //   "bidNo": "Mã thông báo",
  //   "bidName": "Tên gói thầu",
  //   "createdBy": "Người tạo",
  //   "biddingField": "Lĩnh vực",
  //   "status": "Trạng thái đăng tải TB",
  //   "statusBid": "Trạng thái gói thầu",
  //   "bidNoType": "Loại thông báo",
  //   "isInternet": "Cách thức đấu thầu",
  //   "createdDate": "Ngày tạo",
  //   "buttons": {
  //     "btnExport": "Kết xuất excel",
  //     "btnAdd": "Tạo thông báo",
  //     "btnSearch": "Tìm kiếm"
  //   },
  // }
  ACTION = {
    "publish": "Đăng tải",
    "CREATE": "Tạo mới",
    "CREATE_NOTIFY": "Nhập thông tin thông báo",
    "PUBLISH_NOTIFY": "Đăng tải thông báo",
    "CONFIRM": "Xác nhận",
    "btnSave": "Lưu",
    "btnBack": "Quay lại",
    "btnCreate": "Nhập thông báo mời thầu",
    "btnSearch": "Tìm kiếm",
    "btnChoose": "Chọn",
    "btnClose": "Đóng",
    "btnExport": "Kết xuất excel",
    "btnExportSelected": "Kết xuất dữ liệu đã chọn",
    "btnExportAll": "Kết xuất tất cả",
    "edit": "Sửa",
    "delete": "Xóa",
    "extension": "Gia hạn",
    "btnAdd": "Tạo thông báo"
  }

  // index = [
  //   {
  //
  // }
  //
  // ]
  disabled= new FormControl(false);


}
export class TooltipAutoHideExample {
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);
  disabled = new FormControl(false);
}
