import requests

def get_current_season():
    try:
        response = requests.get("https://api.sleeper.app/v1/state/nfl")
        return response.json()['season']
    except:
        return "2024"

def get_user_id(username):
    response = requests.get(f"https://api.sleeper.app/v1/user/{username}")
    if response.json() is None:
        return None
    return response.json()['user_id']

def get_leagues(user_id, season):
    leagues = {}
    response = requests.get(f"https://api.sleeper.app/v1/user/{user_id}/leagues/nfl/{season}")

    if response.json() is None:
        return None

    for league in response.json():
        leagues[league['league_id']] = league['name']
    
    return leagues