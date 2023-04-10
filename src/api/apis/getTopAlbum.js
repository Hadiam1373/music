import fetch from '../fetch/index';


export async function getTopAlbum() {
    return await fetch.get('2.0/?method=user.gettopalbums&user=rj&api_key=91c122276bb09e6550d8c8df0c5f8a8f&format=json')
}
