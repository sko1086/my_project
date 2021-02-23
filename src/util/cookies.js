function saveAuthToCookie(value) {
	document.cookie = `til_auth=${value}`
}

function saveUserToCookie(value) {
	document.cookie = `til_user=${value}`
}

function saveNicknameToCookie(value) {
	document.cookie = `til_nickname=${value}`
}

function saveUserIdToCookie(value) {
	document.cookie = `til_userid=${value}`
}

function getAuthFromCookie() {
	return document.cookie.replace(
		/(?:(?:^|.*;\s*)til_auth\s*=\s*([^;]*).*$)|^.*$/,
		'$1',
	)
}

function getUserFromCookie() {
	return document.cookie.replace(
		/(?:(?:^|.*;\s*)til_user\s*=\s*([^;]*).*$)|^.*$/,
		'$1',
	)
}

function getNicknameFromCookie() {
	return document.cookie.replace(
		/(?:(?:^|.*;\s*)til_nickname\s*=\s*([^;]*).*$)|^.*$/,
		'$1',
	)
}

function getUseridFromCookie() {
	return document.cookie.replace(
		/(?:(?:^|.*;\s*)til_userid\s*=\s*([^;]*).*$)|^.*$/,
		'$1',
	)
}

function deleteCookie(value) {
	document.cookie = `${value}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`
}

export {
	saveAuthToCookie,
	saveUserToCookie,
	saveNicknameToCookie,
	saveUserIdToCookie,
	getAuthFromCookie,
	getUserFromCookie,
	getNicknameFromCookie,
	getUseridFromCookie,
	deleteCookie,
}
