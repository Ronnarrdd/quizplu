import tkinter as tk
import random
import csv
from PIL import Image, ImageTk

class QuizArticles(tk.Tk):
    def __init__(self):
        super().__init__()
        self.title("Quiz des codes d'articles")
        self.geometry("600x600")
        self.config(background="#0062ff")

        self.questions = []
        self.answers = []
        self.load_data()
        self.current_question = None
        self.create_widgets()

    def load_data(self):
        with open("articles.csv", newline='') as csvfile:
            reader = csv.DictReader(csvfile)
            for row in reader:
                self.questions.append(row["name"])
                self.answers.append(row["code"])

    def create_widgets(self):
        self.question_label = tk.Label(self, text="", font=("Arial", 16), bg="#ffffff", padx=10, pady=10)
        self.question_label.pack(fill="x", padx=20, pady=20)

        self.image_label = tk.Label(self, image=None, bg="#ffffff")
        self.image_label.pack(padx=20, pady=20)

        self.answer_entry = tk.Entry(self, font=("Arial", 14), width=10, justify="center")
        self.answer_entry.pack(padx=20, pady=20)
        self.answer_entry.bind("<Return>", self.check_answer)

        self.submit_button = tk.Button(self, text="Soumettre", font=("Arial", 14), command=self.check_answer, state=tk.DISABLED)
        self.submit_button.pack(padx=20, pady=20)

        self.new_question_button = tk.Button(self, text="Nouvelle question", font=("Arial", 14), command=self.new_question, state=tk.DISABLED)
        self.new_question_button.pack(padx=20, pady=20)

        self.answer_button = tk.Button(self, text="Donner la réponse", font=("Arial", 14), command=self.show_answer)
        self.answer_button.pack(padx=20, pady=20)

        self.answer_text = tk.Label(self, text="", font=("Arial", 16), bg="#ffffff", padx=10, pady=10)
        self.answer_text.pack(fill="x", padx=20, pady=20)

    def new_question(self):
        self.current_question = random.choice(self.questions)
        self.question_label.config(text="Quel est le code article pour {} ?".format(self.current_question))
        image_path = "images/{}.png".format(self.answers[self.questions.index(self.current_question)])
        try:
            image = Image.open(image_path)
            image = image.resize((300, 300))
            photo = ImageTk.PhotoImage(image)
            self.image_label.config(image=photo)
            self.image_label.photo = photo
        except FileNotFoundError:
            self.image_label.config(image=None)
        self.answer_entry.delete(0, tk.END)
        self.submit_button.config(state=tk.NORMAL)
        self.answer_text.config(text="")
        self.answer_entry.focus()

    def check_answer(self, event=None):
        answer = self.answer_entry.get()
        if answer == self.answers[self.questions.index(self.current_question)]:
            self.answer_text.config(text="Bonne réponse !", fg="green")
            self.after(1000, self.new_question)
        else:
            self.answer_text.config(text="Mauvaise réponse. Le code article pour {} est {}.".format(self.current_question, self.answers[self.questions.index(self.current_question)]), fg="red
