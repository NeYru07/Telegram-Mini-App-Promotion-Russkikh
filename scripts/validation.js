import { z } from "https://cdn.jsdelivr.net/npm/zod@3.21.4/lib/index.mjs";
		 
			// Схема валидации
			const formSchema = z.object({
			  firstName: z.string().min(2, "Имя обязательно для заполнения"),
			  lastName: z.string().min(2, "Фамилия обязательна для заполнения"),
			  phone: z
				 .string()
				 .min(11, "Номер телефона обязателен для заполнения")
				 .regex(/^(\+7|8)[\s(]?\d{3}[)\s]?\d{3}[- ]?\d{2}[- ]?\d{2}$/, "Некорректный номер телефона"),
			  business: z.string().optional(),
			});
		 
			// Функция валидации
			function validateForm(formData) {
			  try {
				 const validatedData = formSchema.parse(formData);
				 console.log("Данные валидны:", validatedData);
				 return { success: true, data: validatedData };
			  } catch (error) {
				 if (error instanceof z.ZodError) {
					console.error("Ошибки валидации:", error.errors);
					return { success: false, errors: error.errors };
				 }
				 console.error("Неизвестная ошибка:", error);
				 return { success: false, errors: [{ message: "Неизвестная ошибка" }] };
			  }
			}
		 
			// Обработчик формы
			document.getElementById("submitButton").addEventListener("click", function (event) {
  event.preventDefault();

  // Собираем данные формы
  const formData = {
    firstName: document.getElementById("firstName").value.trim(),
    lastName: document.getElementById("lastName").value.trim(),
    phone: document.getElementById("phone").value.trim(),
    business: document.getElementById("business").value.trim(),
  };

  // Валидируем данные
  const validationResult = validateForm(formData);

  // Очищаем предыдущие ошибки
  document.querySelectorAll(".error-message").forEach((errorElement) => {
    errorElement.textContent = "";
  });

  // Убираем красную обводку у всех полей
  document.querySelectorAll(".inputs input").forEach((input) => {
    input.classList.remove("error");
  });

  if (!validationResult.success) {
    // Показываем ошибки над каждым невалидным инпутом
    validationResult.errors.forEach((error) => {
      const fieldId = error.path[0];
      const inputElement = document.getElementById(fieldId);
      const errorElement = document.getElementById(`${fieldId}Error`);

      if (inputElement && errorElement) {
        inputElement.classList.add("error");
        errorElement.textContent = error.message;
      }
    });
  } else {
    console.log("Форма успешно отправлена:", validationResult.data);
    // Показываем модальное окно успеха
    showSuccessModal();
  }
});
		 
			// Функция для показа модального окна
			function showSuccessModal() {
			  console.log("Показываем модальное окно"); // Проверка
			  const modal = document.getElementById("successModal");
			  modal.style.display = "flex";
		 
			  const closeButton = document.querySelector(".close");
			  closeButton.onclick = function () {
				 modal.style.display = "none";
			  };
		 
			  window.onclick = function (event) {
				 if (event.target === modal) {
					modal.style.display = "none";
				 }
			  };
			}