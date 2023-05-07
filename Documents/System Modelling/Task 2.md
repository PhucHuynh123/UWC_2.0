# **Task 2: System modelling**

## **2.1 Draw an activity diagram to capture the business process between systems and the stakeholders in Task Assignment module**

### **2.1.1 Activity diagram for Task Assignment of Collectors**

<img src="./picture/2.1/collector_update_1.png?raw=true"/>
<p align="center">Activity Diagram for Task Assigment of Collectors</p>

Mô tả Activity Diagram for Task Assigment of Collectors: Trước tiên, Back Officers(BO) sẽ xem bảng phân công công việc của collectors (View list collector’s task), nếu BO muốn tiến hành edit (update, create và delete), sẽ có 3 trường hợp xảy ra:

- BO chọn xóa task (delete collector’s task), sau đó hệ thống tiến hành lưu lại các task record task) sau khi BO xóa task và kết thúc hoạt động.
- BO chọn cập nhật task (update collector’s task), BO tiến hành cập nhật thời gian/ca làm
  việc (update time), cập nhật phương tiện (update Vehicle) hoặc cập nhật Route (update
  Route) cho collector.BO có thể chọn thông tin mình muốn cập nhập (không bắt buộc phải
  cập nhật tất cả thông tin). Sau khi BO hoàn thành công việc cập nhật lại thông tin của
  collector, hệ thống lưu lại thông tin task được cập nhật (record task) và kết thúc hoạt
  động.
- BO chọn tạo thêm task (create task), BO lần lượt tiến hành gán Route (Assign Route
  for Collector) cho collector, gán thời gian/ca làm việc ( Assign time) và gán phương tiện
  (Assign Vehicle for Collector). Khi BO tiến hành gán Route, hệ thống sẽ chọn tuyến đường
  tối ưu nhất. Sau khi BO hoàn thành việc gán phương tiện, hệ thống lưu lại thông tin task
  mới được tạo (record task) và kết thúc hoạt động.

### **2.1.2 Activity diagram for Task Assigment of Janitors**

<img src="./picture/2.1/janitor-activity_diagram-update-3.png?raw=true"/>

<p align="center">Activity Diagram for Task Assigment of Janitors</p>

Mô tả Activity Diagram for Task Assigment of Janitors: Trước tiên, Back Officers(BO) sẽ
xem bảng phân công công việc của Janitors (View list Janitor’s task), nếu BO muốn tiến hành
edit (update, create và delete), sẽ có 3 trường hợp xảy ra:

- BO chọn xóa task (delete Janitor’s task), sau đó hệ thống tiến hành lưu lại các task (record
  task) sau khi BO xóa task và kết thúc hoạt động.
- BO chọn cập nhật task (update Janitor’s task), BO tiến hành cập nhật thời gian/ca làm
  việc (update time) hoặc cập nhật Route (update Route) cho Janitor.BO có thể chọn thông
  tin mình muốn cập nhập (không bắt buộc phải cập nhật tất cả thông tin). Sau khi BO
  hoàn thành công việc cập nhật lại thông tin của Janitor, hệ thống lưu lại thông tin task
  được cập nhật (record task) và kết thúc hoạt động.
- BO chọn tạo thêm task (create task),BO tiến hành gán phương tiện (Assign Vehicle for
  Janitor), gán thời gian/ca làm việc (Assign time) và gán Route (Assign Route for Janitor)
  cho Janitor, hệ thống sẽ chọn tuyến đường tối ưu nhất. Sau khi BO hoàn thành việc gán
  phương tiện và route, hệ thống lưu lại thông tin task mới được tạo (record task) và kết
  thúc hoạt động.

## **2.2 Think about a possible way for a back officer to assign vehicles to janitors and collectors. Draw a sequence diagram to visualize this process**

<img src="./picture/2.2/diagram.jpg?raw=true"/>
<p align="center">Sequence diagram</p>

Mô tả Người dùng sau khi chọn một Collector cụ thể và chọn tạo task, hệ thống sẽ chuyển đến giao diện tạo task. Quy trình tạo task như sau:

- Người dùng bấm nút gán tuyến đường, class CreateTaskView gọi đến phương thức gán
  tuyến đường cho TaskController, sau đó TaskController gọi đến RouteDB để lấy danh sách
  tuyến đường, sau đó trả về giao diện AssignRouteView.
- Người dùng bấm chọn tuyến đường phù hợp cho Collector. TaskController ghi nhận và
  chuyển về giao diện CreateTaskView.
- Người dùng bấm cài đặt thời gian, TaskController ghi nhận.
- Người dùng bấm chọn phương tiện, class CreateTaskView gọi đến phương thức gán phương
  tiện cho TaskController, sau đó TaskController gọi đến VehicleDB để lấy danh sách các
  phương tiện. VehicleDB sử dụng thông tin từ vehicle như tuyến đường để tính toán khối
  lượng rác cần thu gom để chọn xe có tải trọng phù hợp, thời gian bắt đầu ca làm việc để
  chọn phương tiện đang sẵn sàng. Trả về danh sách các xe, TaskController gọi đến phương
  thức DisplayListVehicle của AssignVehicleView để hiển thị dánh sách các xe phù hợp.
- Người dùng bấm chọn phương tiện để gán cho Collector. TaskController ghi nhận và chuyển
  về giao diện CreateTaskView.
- Người dùng bấm lưu task, TaskController gọi đến phương thức createTask của TaskDB và
  truyền vào thông tin về tuyến đường, thời gian, phương tiện đã chọn, TaskDB tạo task và
  lưu vào cơ sở dữ liệu.
- Trong trường hợp không có xe phù hợp về tải trọng hoặc thời gian, TaskController trả về
  thông báo không có xe phù hợp.

## **2.3 Draw a class diagram of Task Assignment module as comprehensive as possible**

- BO sẽ tiến hành giao việc từ giao diện Giao việc, bắt đầu từ lớp TaskAssignmentView.
- Khi BO gọi một trong hai phương thức của lớp TaskAssignmentView, hệ thống sẽ tiến
  hành tải lên thông tin của các nhân viên tương ứng từ cơ sở dữ liệu và hiển thị một danh
  sách tương ứng.
- Mỗi thành phần trong danh sách đó sẽ bao gồm thông tin cùng hai lựa chọn Create và
  View task

<img src="./picture/2.3/task_2_3.png?raw=true"/>
<p align="center">Class diagram of Task Assignment module</p>

- Nếu chọn Create, một đối tượng thuộc lớp Task (gọi chung cho cả Janitor và Collector)
  sẽ được khởi tạo. BO trực tiếp tạo mới task, tương tác với lớp VehicleAssignmentView
  và RouteAssignmentView. Khi hoàn tất, thông tin về task đó sẽ được cập nhật lên cơ
  sở dữ liệu.
- Nếu chọn View, hệ thống sẽ hiển thị danh sách các task hiện tại của nhân viên đó.
  Khi BO chọn Update một task bất kỳ, một đối tượng thuộc lớp Task sẽ được khởi
  tạo, với giá trị thuộc tính task là task đang tương tác. BO trực tiếp thay đổi thông tin
  task, tương tác với lớp VehicleAssignmentView và RouteAssignmentView. Khi hoàn tất, thông tin về task đó sẽ được cập nhật lên cơ sở dữ liệu.
- Các thao tác C/U/D trên task sẽ được tiến hành thông qua class TaskAssignment

### **2.3.1 Mô tả UI Class**

- AssignTaskView
  - assignCollectorTask(): void: Hiển thị giao diện assign collector’s task
  - assignJanitorTask(): void(): Hiển thị giao diện assign janitor’s task
- AssignCollectorTaskView
  - onDisplay(): void : Hiển thị giao diện
  - onSearchCollectorChange(): void: thực hiện tìm collector
  - onCreateTaskClick(employeeID: string): void: thực hiện tạo task cho collector
  - onViewInfoClick(employeeID: string): void: Hiển thị thông tin của collector
- AssignJanitorTaskView
  - onDisplay(): void : Hiển thị giao diện
  - onSearchJanitorChange(): void: thực hiện tìm janitor
  - onCreateTaskClick(employeeID: string): void: Thực hiện tạo task cho janitor
  - onViewInfoClick(employeeID: string): void:Hiển thị thông tin của janitor
- JanitorTaskView - onDisplay(): void : Hiển thị giao diện - onSearchTaskChange(): void: thực hiện tìm task cho janitor - onFilterTaskChange(): void: thực hiện lọc task của janitor - onCreateTaskClick(employeeID: string): void: thực hiện tạo task cho janitor - onDeleteTaskClick(employeeID: string, taskID: string): void:Thực hiện xóa
  task cho janitor - onUpdateTaskClick(employeeID: string, taskID: string): void: Thực hiện cập
  nhật task cho janitor
- CollectorTaskView - onDisplay(): void : Hiển thị giao diện - onSearchTaskChange(): void: Thực hiện tìm task cho collector - onFilterTaskChange(): void: Thực hiện lọc task của collector - onCreateTaskClick(employeeID: string): void: thực hiện tạo task cho collector - onDeleteTaskClick(employeeID: string, taskID: string): void: Thực hiện xóa
  task cho collector - onUpdateTaskClick(employeeID: string, taskID: string): void: Thực hiện cập
  nhật task cho collector
- CreateTaskView - onDisplay(): void : Hiển thị giao diện - onAssignRouteForCollectorClick(): void: Thực hiện gán tuyến đường cho col-
  lector - onAssignRouteForJanitorClick(): void: Thực hiện gán tuyến đường cho janitor - onSetTimeChange(): void: Thực hiện đặt thời gian - onAssignVehicleClick(): void: Thực hiện gán phương tiện - onAssignRouteClick(): void: Thực hiện gán tuyến đường - onSaveClick(): void: Thực hiện lưu task
- AssignRouteView - onDisplay(): void : Hiển thị giao diện - onSelectRouteClick(): void: Thực hiện chọn tuyến đường - onCreateRouteClick(): void: Thực hiện tạo tuyến đường mới - onUpdateRouteClick(routeID: string): void: Thực hiện cập nhật tuyến đường
  ứng với routeID - onDeleteRouteClick(routeID: string): void: Thực hiện xóa tuyến đường ứng với
  routeID - displayListRoutes(Route[]): void: Hiển thị ra danh sách các tuyến đường
- AssignVehicleView - onDisplay(): void : Hiển thị giao diện - onSelectVehicleClick(): void: Hiển thị giao diện và thông tin của phương tiện đã
  chọn - displayListVehicles(Vehicle[]): void: Hiển thị ra danh sách các phương tiện

### **2.3.2 Mô tả Controller Class**

- TaskController - getAllTask(): Task[]: Lấy ra tất cả task và trả về dưới dạng mảng - getTaskByID(taskID: string): Task: Lấy ra task ứng với taskID - createTask(employeeID: string): boolean: Tạo task ứng với employeeID - updateTask(employeeID: string, taskID: string): boolean: Cập nhật task ứng
  với employeeID - deleteTask(employeeID: string, taskID: string): boolean: Xóa task ứng với
  employeeID - getAllCollector(): Collector: Lấy ra tất cả các collectors và trả về - getAllJanitor(): Janitor: Lấy ra tất cả janitors và trả về - getCollectorByID(empoloyeeID: string): Collector: Lấy ra collector ứng với
  employeeID - getJanitorByID(employeeID: string): Janitor: Lấy ra janitor ứng với emplyeeID - getListRoutes(): Route[]: Lấy ra và trả về danh sách các tuyến đường dưới dạng
  mảng - assignRoute(routeID: string, employeeID: string): boolean: Gán tuyến đường
  ứng với routID cho employee ứng với employeeID - selectRoute(routeID: string): void: Chọn route ứng với routeID - getListVehicles(): Vehicle[]: Lấy ra và trả về danh sách phương tiện dưới dạng
  mảng - assignVehicle(vehicleID: string, employeeID: string): boolean: Gán phương
  tiện cho employee ứng với employeeID - selectVehicle(vehicleID: string): Vehicle: chọn phương tiện ứng với vehicleID - setTime(time: string): void: Đặt thời gian cho Task - showMap(): void: Hiển thị bản đồ - saveTask(route: string,time: string,vehicleID: string): boolean: Lưu task
- RouteController
  - showMap(): void: Hiển thị bản đồ
  - createRoute(): boolean: tạo route
  - updateRoute(routeID: string): boolean: cập nhật tuyến đường ứng với routeID
  - deleteRoute(routeID: string): boolean: Xóa route ứng với routeID

### **2.3.3 Mô tả Database Class**

- TaskDB - getAllTask(): Task[]: Lấy ra tất cả các task và trả về dưới dạng mảng - getTaskByID(taskID: string): Task: Lấy ra task với ID tương ứng và trả về Task
  nếu lấy thành công, đồng thời trả về NULL nếu không lấy được. - deleteTask(taskID: string): boolean: Xóa task với ID tương ứng. Trả về true nếu
  xóa thành công, và false nếu ngược lại. - updateTask(taskID: string): boolean: Cập nhật task với ID tương ứng. Trả về
  true nếu cập nhật thành công, và false nếu ngược lại. - createTask(): boolean: Tạo một task mới với dữ liệu ban đầu rỗng. Trả về true nếu
  cập nhật thành công, và false nếu ngược lại. - createTask(routeID: string, time: string, vehicleID: string): boolean: Tạo
  một task mới với dữ liệu ban đầu do người dùng nhập. Trả về true nếu tạo thành
  công, và false nếu ngược lại.
- RouteDB - getAllRoute(): Route[]: Lấy ra danh sách toàn bộ tuyến đường - getRouteByID(routeID: string): Route: Lấy ra tuyến đường có ID tương ứng - deleteRoute(routeID: string): boolean: Xóa tuyến đường có ID tương ứng. Trả
  về true nếu xóa thành công, và false nếu ngược lại. - createRoute(): boolean: Tạo một tuyến đường mới. Trả về true nếu tạo thành
  công, và false nếu ngược lại. - updateRoute(routeID: string): boolean: Cập nhật thông tin tuyến đường với ID
  tương ứng. Trả về true nếu cập nhật thành công, và false nếu ngược lại.
- VehicleDB - getAllVehicle(): Vehicle[]: Lấy ra danh sách toàn bộ phương tiện. - getVehicleByID(vehicleID: string): Vehicle: Lấy ra phương tiện có ID tương
  ứng - getVehicle(route: string, time: string): Vehicle[]: Lấy ra danh sách phương tiện
  có sẵn trên tuyến đường và thời gian đã chọn trước đó.
- EmployeeDB - getAllCollector(): Collector[]: Lấy ra danh sách toàn bộ Collector - getAllJanitor(): Janitor[]: Lấy ra danh sách toàn bộ Janitor. - getCollectorByID(employeeID: string): Collector: Lấy ra Collector có ID tương
  ứng. - getJanitorByID(employeeID: string): Janitor: Lấy ra Janitor có ID tương ứng.

### **2.3.4 Mô tả Entity Class**

- Task
  - taskID: string: ID của task
  - taskName: string: Tên của task
  - timeStart: string: Thời gian bắt đầu của 1 task
  - timeEnd: string: Thời gian kết thúc của 1 task
  - vehicleID: string: ID của phương tiện tương ứng với task
  - routeID: string: ID của tuyến đường tương ứng với task
  - status: string: Trạng thái của task
- Route
  - routeID: string: ID của tuyến đường
  - name: string: Tên của tuyến đường
  - listMCPs: MCP[]: Danh sách các MCPs trên tuyến đường tương ứng
- MCP
  - mcpID: string: ID của MCP
  - name: string: Tên của MCP
  - capacity: float: Sức chứa của MCP
- Vehicle
  - vehicleID: string: ID của phương tiện
  - name: string: Tên của phương tiện
  - weight: float: Khối lượng của phương tiện
  - fuel_consumtion: float: Nhiên liệu tiêu thụ của phương tiện
- Employee
  - employeeID: string: ID của nhân viên
  - name: string: Tên của nhân viên
  - avatar: string: Avatar của nhân viên

## **2.4 Develop MVP 1 as a user interface of either a Desktop-view central dashboard for Task Management for back-officers**

### **2.4.1 Screen flow**

**[Link demo prototype Figma](https://tinyurl.com/PrototypeFigmaDemo)**

<img src="./picture/2.4/pages/a.png?raw=true"/>
<img src="./picture/2.4/pages/b.png?raw=true"/>
<img src="./picture/2.4/pages/c.png?raw=true"/>
<p align="center">Giao diện tất cả các trang</p>

<div align="center">
    <img src="./picture/2.4/pages/desc_page.png?raw=true"/>
</div>

Các luồng hoạt động cho việc quản lý task của nhân viên:

- Create task cho Collector
  <img src="./picture/2.4/screenflow/createTaskForCollector.png?raw=true"/>

<p align="center">Luồng hoạt động để tạo task cho Collector</p>

- Create task cho Janitor
  <img src="./picture/2.4/screenflow/createTaskForJanitor.png?raw=true"/>

<p align="center">Luồng hoạt động để tạo task cho Janitor</p>

- Update task cho Collector
  <img src="./picture/2.4/screenflow/updateTaskForCollector.png?raw=true"/>

<p align="center">Luồng hoạt động để chỉnh sửa task cho Collector</p>

- Update task cho Janitor
  <img src="./picture/2.4/screenflow/updateTaskForJanitor.png?raw=true"/>

<p align="center">Luồng hoạt động để chỉnh sửa task cho Janitor</p>

- Delete task cho Collector / Janitor
  <img src="./picture/2.4/screenflow/deleteTaskForCO&JA.png?raw=true"/>

<p align="center">Luồng hoạt động để xóa task cho Collector / Janitor</p>

**MÔ TẢ CHI TIẾT CHỨC NĂNG THÀNH PHẦN CỦA CÁC TRANG**

### **2.4.2 Home Page**

<img src="./picture/2.4/pages/homepage.png?raw=true"/>

**Mô tả**

<div align="center">
<img src="./picture/2.4/Description/homepage.png?raw=true"/>
</div>

### **2.4.3 Login Page**

<img src="./picture/2.4/pages/login page.png?raw=true"/>

**Mô tả**

<div align="center">
<img src="./picture/2.4/Description/loginpage.png?raw=true"/>
</div>

### **2.4.4 Signup Page**

<img src="./picture/2.4/pages/signup page.png?raw=true"/>

**Mô tả**

<div align="center">
<img src="./picture/2.4/Description/signuppage.png?raw=true"/>
</div>

### **2.4.5 HomePage For BO**

<img src="./picture/2.4/pages/homepage for BO.png?raw=true"/>

**Mô tả**

<div align="center">
<img src="./picture/2.4/Description/homepageForBO.png?raw=true"/>
</div>

### **2.4.5 HomePage For BO**

<img src="./picture/2.4/pages/homepage for BO.png?raw=true"/>

**Mô tả**

<div align="center">
<img src="./picture/2.4/Description/homepageForBO.png?raw=true"/>
<img src="./picture/2.4/Description/homepageForBO_1.png?raw=true"/>
</div>

### **2.4.6 Assign Task Page**

<img src="./picture/2.4/pages/assign task page.png?raw=true"/>

**Mô tả**

<div align="center">
<img src="./picture/2.4/Description/assignTaskPage.png?raw=true"/>
</div>

### **2.4.7 Assign Task For Collector Page**

<img src="./picture/2.4/pages/assign task for collector page.png?raw=true"/>

**Mô tả**

<div align="center">
<img src="./picture/2.4/Description/assignTaskForCollectorPage.png?raw=true"/>
</div>

### **2.4.8 Assign Task For Janitor Page**

<img src="./picture/2.4/pages/assign task for janitor page.png?raw=true"/>

**Mô tả**

<div align="center">
<img src="./picture/2.4/Description/assignTaskForJanitorPage.png?raw=true"/>
</div>

### **2.4.9 View Info Collector Task Page**

<img src="./picture/2.4/pages/view collector task page.png?raw=true"/>

**Mô tả**

<div align="center">
<img src="./picture/2.4/Description/viewCollectorTaskPage.png?raw=true"/>
<img src="./picture/2.4/Description/viewCollectorTaskPage_1.png?raw=true"/>
</div>

### **2.4.10 View Info Janitor Task Page**

<img src="./picture/2.4/pages/view janitor task page.png?raw=true"/>

**Mô tả**

<div align="center">
<img src="./picture/2.4/Description/viewJanitorTaskPage.png?raw=true"/>
<img src="./picture/2.4/Description/viewJanitorTaskPage_1.png?raw=true"/>
</div>

### **2.4.11 Create Collector Task Page**

<img src="./picture/2.4/pages/create collector task page.png?raw=true"/>

**Mô tả**

<div align="center">
<img src="./picture/2.4/Description/createCollectorTaskPage.png?raw=true"/>
</div>

### **2.4.12 Create Janitor Task Page**

<img src="./picture/2.4/pages/create janitor task page.png?raw=true"/>

**Mô tả**

<div align="center">
<img src="./picture/2.4/Description/createJanitorTaskPage.png?raw=true"/>
</div>

### **2.4.13 Update Collector Task Page**

<img src="./picture/2.4/pages/Update collector task page.png?raw=true"/>

**Mô tả**

<div align="center">
<img src="./picture/2.4/Description/UpdateCollectorTaskPage.png?raw=true"/>
</div>

### **2.4.14 Update Janitor Task Page**

<img src="./picture/2.4/pages/Update janitor task page.png?raw=true"/>

**Mô tả**

<div align="center">
<img src="./picture/2.4/Description/UpdateJanitorTaskPage.png?raw=true"/>
</div>

### **2.4.15 Delete Collector / Janitor Task**

<img src="./picture/2.4/pages/delete popup.png?raw=true"/>

**Mô tả**

<div align="center">
<img src="./picture/2.4/Description/deleteTask.png?raw=true"/>
</div>

### **2.4.16 Assign vehicle view page**

<img src="./picture/2.4/pages/assign vehicle page.png?raw=true"/>

**Mô tả**

<div align="center">
<img src="./picture/2.4/Description/assignVehiclePage.png?raw=true"/>
</div>

### **2.4.17 Assign route view page**

<img src="./picture/2.4/pages/assign route view page.png?raw=true"/>

**Mô tả**

<div align="center">
<img src="./picture/2.4/Description/assignRoute.png?raw=true"/>
</div>

### **2.4.18 Create route view page**

<img src="./picture/2.4/pages/create route view page.png?raw=true"/>

**Mô tả**

<div align="center">
<img src="./picture/2.4/Description/createRoute.png?raw=true"/>
</div>

### **2.4.19 Update route view page**

<img src="./picture/2.4/pages/update route view page.png?raw=true"/>

**Mô tả**

<div align="center">
<img src="./picture/2.4/Description/updateRoute.png?raw=true"/>
</div>
