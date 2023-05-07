# **Task 1: Requirement elicitation**

## **1.1 Phân tích bối cảnh**

### **1.1.1 Lý do chọn đề tài**

- Quản lý chất thải đô thị là một trong những vấn đề quan trọng và nhức nhối của nhiều quốc gia hiện nay trên thế giới phải đối mặt. Trong bối cảnh đô thị, quản lý chất thải rắn là tốn kém và không hiệu quả. Cải thiện quá trình quản lý chất thải được nhấn mạnh bởi các chính phủ và tổ chức về tác động tích cực đến các thành phố, xã hội và môi trường.

- Cùng với sự phát triển của công nghệ hiện nay, một hệ thống được tích hợp tiên tiến để cải thiện trong việc quản lý chất thải đó là UWC 2.0. Hệ thống này ra đời nhằm giảm rác thải và cải thiện mỹ quan môi trường đô thị, tăng cường tái chế và giảm chất thải gửi đến các bãi chôn lấp, mang lại lợi ích cho môi trường và có khả năng giảm chi phí, cải thiện sức khỏe cho
  con người và giảm nguy cơ mắc bệnh liên quan đến tích tụ chất thải,... Từ đó góp phần hạn chế ô nhiễm môi trường gây ảnh hưởng về lâu, về dài đến các quốc gia.

### **1.1.2 Stakeholders**

- Stakeholders có thể là cá nhân hoặc tổ chức có ảnh hưởng hoặc bị ảnh hưởng bởi hệ thống theo một cách nào đó và họ có sự ràng buộc về pháp lý với hệ thống. Các stakeholders của phần
  mềm này được xác định là: back officers; collector, janitor; admin.

### **1.1.3 Nhu cầu của các stakeholders**

#### **1.1.3.a Back officers**

- Xem được danh sách, thông tin và lịch làm việc của các collector và janitor.
- Xem được danh sách, thông tin của các phương tiện thu gom bao gồm: trọng lượng, trọng tải, loại nhiên liệu tiêu thụ,...
- Xem được danh sách, thông tin của các MCP: sức chứa, địa chỉ, đang chứa bao nhiêu
  phần trăm sức chứa tối đa,...
- Phân công phương tiện thu gom cho collector và janitor.
- Phân công các MCP công tác cho collector và janitor.
- Cung cấp đường đi cho mỗi collector sao cho tuyến đường được chọn là tối ưu hóa về mặt nhiên liệu và khoảng cách di chuyển.
- Có khả năng trao đổi thông tin giữa các collector -janitor và back officers.

#### **1.1.3.b Collector và janitor**

- Được đào tạo cũng như được hỗ trợ một cách nhanh chóng.
- Dễ dàng tiếp cận lịch làm việc của họ.
- Xem được thông tin công việc theo ngày và theo tuần.
- Có thể nhắn tin cho các back officers, các collector và các janitor khác.
- Check-in, check-out công việc mỗi ngày.
- Nhận được thông báo nếu MCP được phân công đã đầy

### **1.1.4 Vấn đề của các stakeholders**

#### **1.1.4.a Back officers**

- Việc phân công công việc, các MCP, phương tiện và tuyến đường di chuyển cho toàn bộ collector và janitor là một công việc có khối lượng lớn với nhiều thông tin nên dễ gây sai sót khi làm thủ công bằng tay.
- Khi chưa có phần mềm thì việc thông báo đến collector và janitor tốn nhiều thời gian và chi phí để truyền thông tin. Muốn thông báo thì phải liên hệ từng người gây tốn thời gian cũng như đạt hiệu quả không cao trong việc xử lý rác thải.
- Khó khăn trong việc kiểm sót lịch trình làm việc cũng như là thông tin của collector và janitor.

#### **1.1.4.b Collector và janitor**

- Muốn xem lịch làm việc phải ghi chú hoặc đến nơi làm việc để xem thông báo hoặc là đợi liên lạc từ cấp trên.
- Khi có thông báo nghỉ hoặc làm đột xuất thì sẽ không chủ động trước được thời gian làm việc.

### **1.1.5 Lợi ích UWC 2.0 mang lại cho các stakeholders**

#### **1.1.5.a Back officers**

- Dễ dàng lên kế hoạch làm việc cũng như trao đổi với các nhân viên.
- Khi có sự cố thì thông tin được đưa về một cách nhanh chóng.
- Xử lý thông qua việc xóa, thêm công việc cho collector và janitor cũng trỏ nên thuận tiện hơn.
- Kiểm soát được thời lượng làm việc của collector và janitor.

#### **1.1.5.b Collector và janitor**

- Nắm được tổng quan lịch trình hàng ngày, hàng tuần của mình.
- Khi có thông báo mới từ Back officers thì sẽ nhận được một cách nhanh chóng.
- Kiểm soát được giờ làm việc của mình (có thể xin nghỉ hoặc đăng kí tăng ca trên hệ thống).

## **1.2 Yêu cầu chức năng và phi chức năng**

### **1.2.1 Yêu cầu chức năng - Functional requirements**

Các yêu cầu chức năng lần lượt cho các đối tượng lần lượt như sau: \

- Back officers(Người quản lý - Người giao việc): - Back officers có thể đăng nhập / đăng xuất vào hệ thống để làm việc. - Quản lý thông tin (lịch làm việc, tiến độ công việc, tuyến đường, thông số các phương tiện) của collectors và janitors. - Phân công công việc cho collectors và janitors (bao gồm thời gian làm việc, phương
  tiện sử dụng và tuyến đường). - Quản lý thông tin của phương tiện (xem thông số kỹ thuật, sức chứa, mức tiêu thụ
  nhiên liệu,...). - Quản lý (xem, thêm, sửa, xóa) tuyến đường, thông tin và sức chứa của các MCPs. - Gửi tin nhắn phân công công việc tới collectors và janitors hằng ngày. - Xem thông tin cá nhân và gửi yêu cầu chỉnh sửa đến với admin.
- Collectors, Janitors:
  - Có thể đăng nhập / đăng xuất vào hệ thống để xem lịch làm việc.
  - Có thể xem chi tiết lịch, tuyến đường và công việc được phân công trong ngày và trong tuần.
  - Có thể giao tiếp với collectors, janitors khác, back officers và admin.
  - Check in/check out công việc hằng ngày.
  - Gửi tiến độ công việc gửi cho back officer.
  - Xem thông tin cá nhân và gửi yêu cầu chỉnh sửa đến với admin.
  - Thông báo sức chứa của MCPs.
- Admin:
  - Admin có thể đăng nhập / đăng xuất vào hệ thống để quản lý.
  - Tạo, chỉnh sửa (thông tin người dùng, mật khẩu), xóa tài khoản trên hệ thống.
  - Có thêm các chức năng của back officers.

### **1.2.2 Yêu cầu phi chức năng - Non-functional requirements**

- Về giao diện: hệ thống có giao diện tiếng Việt và có khả năng chuyển sang tiếng Anh.
- Về hiệu suất: - Hệ thống có khả năng xử lý dữ liệu thời gian thực với ít nhất 1000 MCPs tại thời
  điểm hiện tại và 10000 MCPs trong vòng 5 năm tới. - Hệ thống cho phép gửi tin nhắn với độ trễ tin nhắn không quá 3s. - Thời gian phản hồi và hiển thị lên hệ thống khi có dữ liệu vào ít hơn 3s.
- Về thời gian hoạt động: - Bình thường hệ thống hoạt động trước giờ hành chính buổi sáng 30 phút và sau giờ
  hành chính buổi chiều 30 phút (từ 7h đến 17h30ph). - Vào các ngày nghỉ lễ (nghỉ lễ theo lịch của nhà nước), thời gian hoạt động của hệ
  thống là 7h đến 23h.
- Về độ tin cậy: - Tỉ lệ truy cập hệ thống thất bại là 2 lần trong 1000 lần truy cập. - Tỉ lệ gửi nhầm hoặc sai tin nhắn phân công công việc tới collectors và janitors là 1
  lần trong 1000 lần gửi tin nhắn.
- Về bảo mật: Các tài khoản được đăng nhập sai tối đa 5 lần, nếu sai quá 5 lần sẽ bị khóa
  tài khoản.

### **1.2.3 Biểu đồ use-case cho toàn bộ hệ thống:**

<img src="./picture/1.2.png?raw=true"/>
<p align="center">Biểu đồ use-case cho toàn bộ hệ thống</p>

### **1.2.4 Bảng danh sách các actor:**

<div align="center">
<img src="./picture/list_actors.png?raw=true"/>
</div>

### **1.2.5 Bảng danh sách các use-case chính của hệ thống:**

<div align="center">
<img src="./picture/desc_usecase.png?raw=true"/>
</div>

## **1.3 Module task assignment**

### **1.3.1 Biểu đồ use-case cho chức năng Assign task**

<div align="center">
<img src="./picture/1.3.png?raw=true"/>
</div>
<p align="center">Biểu đồ use-case cho chức năng Assign task</p>

### **1.3.2 Bảng miêu tả các use case**
<img src="./picture/uc1.png?raw=true"/>
<img src="./picture/uc1.1.png?raw=true"/>
<img src="./picture/uc2.png?raw=true"/>
<img src="./picture/uc3.png?raw=true"/>
<img src="./picture/uc4.png?raw=true"/>
<img src="./picture/uc5.png?raw=true"/>
<img src="./picture/uc5.1.png?raw=true"/>
<img src="./picture/uc6.png?raw=true"/>
<img src="./picture/uc7.png?raw=true"/>
<img src="./picture/uc8.1.png?raw=true"/>
<img src="./picture/uc9.png?raw=true"/>
<img src="./picture/uc9.1.png?raw=true"/>
<img src="./picture/uc10.png?raw=true"/>
<img src="./picture/uc10.1.png?raw=true"/>
<img src="./picture/uc11.png?raw=true"/>
<img src="./picture/uc11.1.png?raw=true"/>
<img src="./picture/uc12.png?raw=true"/>
