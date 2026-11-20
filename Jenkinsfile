pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out Node.js project...'
                checkout scm
            }
        }

        stage('Check Node.js and npm') {
            steps {
                bat 'node --version'
                bat 'npm --version'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npm test'
            }
        }

        stage('Build Application') {
            steps {
                bat 'npm run build'
            }
        }
    }

    post {
        success {
            echo 'Node.js Pipeline executed successfully!'
        }

        failure {
            echo 'Node.js Pipeline failed!'
        }
    }
}
