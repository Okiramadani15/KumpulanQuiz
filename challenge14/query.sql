CREATE TABLE Mahasiswa(
    Nim VARCHAR(10) PRIMARY KEY NOT NULL,
    Nama VARCHAR(100) NOT NULL,
    Alamat VARCHAR(20) NOT NULL,
    ID_Jurusan VARCHAR(10) NOT NULL 
);

INSERT INTO Mahasiswa (Nim,Nama,Alamat,ID_Jurusan) VALUES 
("M001", "oki", "Medan","J001"),
("M002", "adif","Bogor", "J001"),
("M003", "ogi","Bandung", "J001 "),
("M004", "ramdan","Garut", "J002"),
("M005", "rizky", "Tasik","J002"),
("M006", "rizal", "Sumedang","J002");

SELECT * FROM Mahasiswa;

CREATE TABLE Jurusan(
    ID_Jurusan VARCHAR(10) PRIMARY KEY NOT NULL,
    Nama_Jurusan VARCHAR(100) NOT NULL,
     FOREIGN KEY(ID_Jurusan) REFERENCES Mahasiswa (ID_Jurusan)
);


INSERT INTO Jurusan (ID_Jurusan, Nama_Jurusan) VALUES
("J001","Sistem Informasi"),
("J002","Teknik Informasi");

SELECT * FROM Jurusan;


CREATE TABLE Dosen(
    ID_Dosen VARCHAR(10) PRIMARY KEY NOT NULL,
    Nama_Dosen VARCHAR(100) NOT NULL

);

INSERT INTO Dosen (ID_Dosen,Nama_Dosen) VALUES 
("D001","Rubi Henjaya");

SELECT * FROM Dosen;

CREATE TABLE Mata_kuliah(
    ID_Matakuliah VARCHAR(10) PRIMARY KEY NOT NULL,
    Nama_Matakuliah VARCHAR(100) NOT NULL,
    Sks VARCHAR(10) NOT NULL
);

INSERT INTO Mata_kuliah ( ID_Matakuliah, Nama_Matakuliah, Sks) VALUES 
("MK001","Learn Logic javascrpits", "5"),
("MK002","Learn sqlite3", "4"),
("MK003","Learn postgreSql", "4");

SELECT * FROM Mata_kuliah;


                                            




