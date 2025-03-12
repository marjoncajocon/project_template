// main.cpp
#include <QCoreApplication>
#include <QDebug>

int main(int argc, char *argv[]) {
    QCoreApplication app(argc, argv);

    qDebug() << "Hello, Qt from the command line!";
    
    return app.exec();
}