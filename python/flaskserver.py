# flask rest api server

from re import A
from flask import Flask, request, jsonify
from flask_restful import Resource, Api
from json import dumps
from flask_cors import CORS, cross_origin

import os
import subprocess

"""
images/9.jpg  9%
images/5.jpg  7%
images/7.jpg  7%
images/4.jpg  7%
images/8.jpg  5%

image:
      "https://i.postimg.cc/0QgQd7xz/0c7c8736-354d-4d87-905b-a3ef1025c71f.png",
    percentage: "97.6",
  },

  image2: {
    image:
      "https://i.postimg.cc/j5zj8CdZ/3ad47760-5a79-449a-beb0-fbfd49c43f6e.png",
    klayAdress: "0xce146236fe4e48240cd8f7d22c38c07c7a6bab0b",
  },
  image3: {
    image:
      "https://i.postimg.cc/7YBZtFw8/45952a13-2d7b-481f-8dae-61faf56ec585.png",
    klayAdress: "0x8b0b1b0e1e1b5b1b1b1b1b1b1b1b1b1b1b1b1b1b",
  },
  image4: {
    image:
      "https://i.postimg.cc/MHqpgxnx/5ff51de9-57d8-455e-94da-05498d45a07d.png",
    klayAdress: "0x8b0b1b0e1e1b5b1b1b1b1b1b1b1b1b1b1b1b1b1b",



"""



mapping = {
 "images/9.jpg": "https://i.postimg.cc/j5zj8CdZ/3ad47760-5a79-449a-beb0-fbfd49c43f6e.png",
  "images/5.jpg": "https://i.postimg.cc/7YBZtFw8/45952a13-2d7b-481f-8dae-61faf56ec585.png",
  "images/7.jpg": "https://i.postimg.cc/MHqpgxnx/5ff51de9-57d8-455e-94da-05498d45a07d.png",
  "images/4.jpg": "https://i.postimg.cc/fRJTG8R3/ddd7d915-698c-457f-a594-4b7179bd4a52.png",
  "images/8.jpg": "https://i.postimg.cc/RhdZB8tt/7c43db4a-a295-41c1-81a2-47621cec6868.png",
}

app = Flask(__name__)
cors = CORS(app)

api = Api(app)
app.config['CORS_HEADERS'] = 'Content-Type'



@app.route('/getpics', methods=['POST'])
@cross_origin()
def getpics():
  response = jsonify(message="Simple server is running")

    # Enable Access-Control-Allow-Origin
  response.headers.add("Access-Control-Allow-Origin", "*")

  # a = os.system("reverse_image_search 1.jpg images/  -t 0.01")
  test = os.popen("reverse_image_search 1.jpg images/  -t 0.05").read()
  print (test)

  """
  test = "Finding similar images...\n- to: 1.jpg\n- in: images\n- filetypes: ['.jpg', '.jpeg']\n- threshold: 0.01\n\n\n⢿\n⣻\n⣽\n⣾\n⣷\n⣯\n⣟\n⡿\n⢿\n⣻\n⣽\n⣾\n⣷\n⣯\n⣟\n⡿\n⢿\n⣻\n⣽\n⣾\n⣷\n⣯\n⣟\n⡿\n⢿\n⣻\n⣽\n⣾\n⣷\n⣯\n⣟\n⡿\n⢿\n⣻\n⣽\n⣾\n⣷\nMatches:\nfilepath               similarity\n---------------------  ------------\nimages/1.jpg           100%\nimages/9.jpg           9%\nimages/5.jpg           7%\nimages/7.jpg           7%\nimages/4.jpg           7%\nimages/8.jpg           5%\nimages/6.jpg           3%\nimages/2.jpg           3%\nimages/s copy 12.jpeg  2%\nimages/s copy 24.jpeg  2%\nimages/s copy 25.jpeg  2%\nimages/s.jpeg          2%\nimages/s copy 13.jpeg  2%\nimages/s copy 18.jpeg  2%\nimages/s copy.jpeg     2%\nimages/s copy 6.jpeg   2%\nimages/s copy 22.jpeg  2%\nimages/s copy 14.jpeg  2%\nimages/s copy 15.jpeg  2%\nimages/s copy 23.jpeg  2%\nimages/s copy 7.jpeg   2%\nimages/s copy 19.jpeg  2%\nimages/s copy 20.jpeg  2%\nimages/s copy 4.jpeg   2%\nimages/s copy 8.jpeg   2%\nimages/s copy 16.jpeg  2%\nimages/s copy 17.jpeg  2%\nimages/s copy 9.jpeg   2%\nimages/s copy 5.jpeg   2%\nimages/s copy 21.jpeg  2%\nimages/s copy 10.jpeg  2%\nimages/s copy 26.jpeg  2%\nimages/s copy 2.jpeg   2%\nimages/s copy 3.jpeg   2%\nimages/s copy 27.jpeg  2%\nimages/s copy 11.jpeg  2%\nimages/3.jpg           1%\n\n"
  """
  # test is the above string I want to access the files that matches in an array
  
  # remove everything before Matches:
  test = test.split("Matches:")[1]
  apa = test.split("\n")

  print(apa)
  image_1 = apa[5]
  image_2 = apa[6]
  image_3 = apa[7]
  # image_1 = "images/5.jpg           7%",
  # extract the image name from the string
  image_1 = image_1.split(" ")[0]
  image_2 = image_2.split(" ")[0]
  image_3 = image_3.split(" ")[0]

  # get the image url from the mapping
  image_1 = mapping[image_1]
  image_2 = mapping[image_2]
  image_3 = mapping[image_3]


  return jsonify([image_1, image_2, image_3])


if __name__ == '__main__':
    app.run(port='5002')