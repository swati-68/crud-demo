import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees =[
    {
      name : "Swati",
      address : "Shree Sai Swami Krupa, F No-4, P No-118, Pimple Gurav",
      contact_no : 9847204867,
      email : "swati@gmail.com"
    },
    {
      name : "Kiran",
      address : "Rajmudra Housing Society",
      contact_no : 8467206789,
      email : "kiran@gmail.com"
    },
    {
      name : "Pavan",
      address : "Pune",
      contact_no : 4563828282,
      email : "pavan@gmail.com"
    },
    {
      name : "Krishna",
      address : "Mumbai",
      contact_no : 99464727272,
      email : "krishna@gmail.com"
    },
    {
      name : "Soham",
      address : "Chandan Nagar",
      contact_no : 98462927465,
      email : "soham@gmail.com"
    },
    {
      name : "Sneha",
      address : "Chandan Nagar",
      contact_no : 9038373710,
      email : "sneha@gmail.com"
    },
    {
      name : "Chanda",
      address : "Nigadi",
      contact_no : 5899294703,
      email : "chanda@gmail.com"
    },
    {
      name : "Santoshi",
      address : "Hadpsar",
      contact_no : 5479292929,
      email : "santoshi@gmail.com"
    },
    {
      name : "Shubhangi",
      address : "Bhor",
      contact_no : 7849292020,
      email : "shubhangi@gmail.com"
    },
    {
      name : "Jagruti",
      address : "Aundh",
      contact_no : 4567181945,
      email : "jagruti@gmail.com"
    },
  ] ;

  public empRecord : any;

   // Get Records
   public empData = new BehaviorSubject<any>(this.employees);
   public employeesData = this.empData.asObservable();

  constructor() { }

  /**
  * getData
  * @param start start
  * @param limit limit
  * @param orderby orderby
  * @param order order
  * @returns listing
  */
  getData() : Observable<any>{
    return this.empData.asObservable();
  }

  
  /**
   * add location
   * @param formData formData
   * @returns 
   */
  createRecord(formData: any){
    this.employees.push(formData);
    this.empData.next(this.employees)
  }


  /**
   * 
   * @param id item id
   * @param formData formData
   * @returns 
   */
  update(index: number, formData: any) {
   this.employees.splice(index, 1, formData);
   this.empData.next(this.employees);
  }

  
  /**
   * 
   * @param id id
   * @returns deleted item
   */
  delete(index:number){
    this.employees.splice(index, 1);
    this.empData.next(this.employees)
  }

}
