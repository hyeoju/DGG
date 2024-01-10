from flask import Flask, request, render_template, redirect, url_for

app = Flask(__name__)

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')
        if username == 'admin' and password == 'password':  # 예시용 간단한 로그인 검증 로직
            return redirect(url_for('home'))  # 로그인 성공 시 홈으로 리다이렉트
        else:
            return 'Invalid username or password'  # 로그인 실패 메시지
    return render_template('login.html')  # GET 요청 시 로그인 페이지 렌더링
