CREATE TABLE Jurusan(
    ID_Jurusan VARCHAR(10) PRIMARY KEY NOT NULL,
    Nama_Jurusan VARCHAR(100) NOT NULL
);
    
INSERT INTO Jurusan (ID_Jurusan, Nama_Jurusan) VALUES
("J001","Sistem Informasi"),
("J002","Teknik Informasi");



SELECT * FROM Jurusan;

CREATE TABLE Mahasiswa(
    Nim VARCHAR(10) PRIMARY KEY NOT NULL,
    Nama VARCHAR(100) NOT NULL,
    Alamat VARCHAR(20) NOT NULL,
    Umur INTEGER (2) NOT NULL,
    ID_Jurusan VARCHAR(10) NOT NULL,
    FOREIGN KEY(ID_Jurusan) REFERENCES Jurusan (ID_Jurusan)
);

INSERT INTO Mahasiswa (Nim,Nama,Alamat,Umur,ID_Jurusan) VALUES 
("M001", "oki", "Medan","27","J001"),
("M002", "adif","Bogor","24","J001"),
("M003", "ogi","Bandung","28", "J001"),
("M004", "ramdan","Garut","24", "J002"),
("M005", "rizky", "Tasik","24","J002"),
("M006", "rizal", "Sumedang","18","J002"),
("M007", "riki", "bogor","20","J001"),
("M008", "fahmi", "medan","27","J002"),
("M009", "frans", "tangerang","28","J002"),
("M0010", "agus", "semarang","18","J001"),


SELECT * FROM Mahasiswa;

CREATE TABLE Dosen(
    ID_Dosen VARCHAR(10) PRIMARY KEY NOT NULL,
    Nama_Dosen VARCHAR(100) NOT NULL
);

INSERT INTO Dosen (ID_Dosen,Nama_Dosen) VALUES 
("D001","Rubi Henjaya")
("D002","suhendra")
SELECT * FROM Dosen;

CREATE TABLE Mata_kuliah(
    ID_Matakuliah VARCHAR(10) PRIMARY KEY NOT NULL,
    Nama_Matakuliah VARCHAR(100) NOT NULL,
    Sks INTEGER (1)  NOT NULL,
     FOREIGN KEY(ID_Dosen) REFERENCES Dosen (ID_Dosen),
     FOREIGN KEY(ID_Jurusan) REFERENCES Jurusan (ID_Jurusan)
);

INSERT INTO Mata_kuliah ( ID_Matakuliah, Nama_Matakuliah, ID_Dosen, ID_Jurusan,Sks) VALUES 
("MK001","Learn javascrpits","D001","J002", "10"),
("MK002","Learn Database","D001","J001", "5"),
("MK003","Learn Enterprize bisnis", "D002","J001","5"),
("MK004","Data mining ", "D002","J001","10"),


SELECT * FROM Mata_kuliah;

CREATE TABLE Jadwal (
    ID_Jurusan VARCHAR (10) NOT NULL,
    ID_Matakuliah VARCHAR(10) PRIMARY KEY NOT NULL,
    Sks VARCHAR(10) NOT NULL,
    FOREIGN KEY(ID_Jurusan) REFERENCES Jurusan (ID_Dosen),
    FOREIGN KEY(ID_Matakuliah ) REFERENCES Mata_kuliah (ID_Dosen),
    FOREIGN KEY(Sks) REFERENCES Mata_kuliah(ID_Dosen)
);

INSERT INTO Jadwal (ID_Jurusan,ID_Matakuliah,Sks) VALUES
("J002","MK001","5"),
("J001","MK002","4"),
("J001","MK003","4");

SELECT * FROM Jadwal;

CREATE TABLE KRS(
    Nim VARCHAR(10) PRIMARY KEY NOT NULL,
     Nama_Matakuliah VARCHAR(100) NOT NULL,
    Sks VARCHAR(10) NOT NULL,
    Nilai VARCHAR(2) NOT NULL,
    FOREIGN KEY(Nim) REFERENCES Mahasiswa (Nim),
    FOREIGN KEY(ID_Jurusan) REFERENCES Jurusan (ID_Jurusan),
    FOREIGN KEY(Nama_Matakuliah) REFERENCES Mata_kuliah (Mata_kuliah),
    FOREIGN KEY(Sks) REFERENCES Mata_kuliah (Sks)
);

INSERT INTO KRS ( Nim,ID_Jurusan,Nama_Matakuliah,Sks,Nilai) VALUES
("M001","J001","Learn sqlite3","4","A"),
("M002","J001","Learn sqlite3","4","A"),
("M003","J001","Learn postgreSql","4","A"),
("M004","J002","Learn Logic javascrpits","5","A"),
("M005","J002","Learn Logic javascrpits","5","A"),
("M006","J002","Learn Logic javascrpits","5","A"),
("M007","J002","Learn Logic javascrpits","5","B"),
("M008","J002","Learn Logic javascrpits","5","C"),
("M009","J002","Learn Logic javascrpits","5","D"),
("M0010","J002","Learn Logic javascrpits","5","E"),

SELECT * FROM KRS;



