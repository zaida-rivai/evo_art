from flask import Flask
from flask import render_template, request, jsonify, make_response

# creates a Flask application, named app
app = Flask(__name__)

# a route where we will display a welcome message via an HTML template
@app.route("/")
def hello():
    message = "Welcome"
    return render_template('index.html', message=message)

# rendering the HTML page which has the button
@app.route('/json')
def json():
    return render_template('json.html')

# background process happening without any refreshing
@app.route('/background_process_test')
def background_process_test():
    print("Hello")
    return("nothing")

@app.route('/move_forward', methods=['GET','POST'])
def move_forward():
    print("Hallo Zaida")
    return

@app.route('/guestbook')
def guestbook():
    return(render_template("guestbook.html"))

@app.route('/guestbook/create-entry', methods=["POST"])
def create_entry():
    req = request.get_json()
    print(req)
    res = make_response(jsonify({"message": "OK"}), 200)
    return res

# run the application
if __name__ == "__main__":
    app.run(debug=True)
