from flask import Flask, jsonify, request, abort

import sleeper_utils

app = Flask(__name__)

@app.route('/get_leagues', methods=['GET'])
def get_leagues():
    username = request.args.get('username')
    user_id = sleeper_utils.get_user_id(username)

    if user_id is None:
        abort(404)

    season = sleeper_utils.get_current_season()
    leagues = sleeper_utils.get_leagues(user_id, season)

    if leagues is None or len(leagues) == 0:
        abort(404)

    return jsonify(leagues)