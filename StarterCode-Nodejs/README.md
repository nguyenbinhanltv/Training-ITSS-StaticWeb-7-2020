1.Mô tả: Cho một bộ bài tây 52 lá (bỏ đi 2 con Joker).
  Tính xem, khả năng để chọn ra ngẫu nhiên một bộ gồm X lá bài chứa ít nhất Y lá thuộc một chất (Cơ, Rô, Chuồn, Bitch) (không cần quan tâm chất nào đâu !!!).

2.Input: Gồm một dòng chứa 2 số:
  X (1 <= X <= 52): Chọn ngẫu nhiên bộ X lá bài 
  Y (Y <= X): Số lượng lá bài thuộc một chất bất kì tồn tại ít nhất trong một bộ X lá bài ngẫu nhiên.
  VD: 10 3
  Ý nghĩa: Chọn ra một bộ 10 lá bài bất kì, trong đó có ít nhất 3 lá thuộc chất Z (Z là chất nào cũng được, nhưng chỉ xét một chất tại một thời điểm).
  
3.Output: Một con số P duy nhất thể hiện khả năng (xác suất) để đề bài xảy ra. 0 <= P <= 1 và P được lấy đến 2 chữ số phần thập phân.

4.Ví dụ mẫu:
  Input         Output
  10 3          0.48
  5 1           0.78
