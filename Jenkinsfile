pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out source code'
                checkout scm
            }
        }

        stage('Check Node Version') {
            steps {
                sh 'node --version'
                sh 'npm --version'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build Application') {
            steps {
                sh 'npm run build'
            }
        }
    }

    post {
        success {
            echo 'Node.js Pipeline Successful!'
        }

        failure {
            echo 'Node.js Pipeline Failed!'
        }
    }
}
