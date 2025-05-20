from flask import Flask, render_template, request

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/search")
def search():
    return request.args


@app.route("/about_page")
def about_page():
    return "About Page"


@app.route("/contact_page")
def contact_page():
    return "Contact Page"


if __name__ == "__main__":
    app.run(debug=True)
