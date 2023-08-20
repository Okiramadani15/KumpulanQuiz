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
    ID_Jurusan VARCHAR(10) NOT NULL,
    FOREIGN KEY(ID_Jurusan) REFERENCES Jurusan (ID_Jurusan)
);

INSERT INTO Mahasiswa (Nim,Nama,Alamat,ID_Jurusan) VALUES 
("M001", "oki", "Medan","J001"),
("M002", "adif","Bogor", "J001"),
("M003", "ogi","Bandung", "J001"),
("M004", "ramdan","Garut", "J002"),
("M005", "rizky", "Tasik","J002"),
("M006", "rizal", "Sumedang","J002");

SELECT * FROM Mahasiswa;

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
    ID_Dosen VARCHAR(10) NOT NULL,
    ID_Jurusan VARCHAR (10) NOT NULL,
    Sks INTEGER (1)  NOT NULL,
     FOREIGN KEY(ID_Dosen) REFERENCES Dosen (ID_Dosen),
     FOREIGN KEY(ID_Jurusan) REFERENCES Jurusan (ID_Jurusan)
);

INSERT INTO Mata_kuliah ( ID_Matakuliah, Nama_Matakuliah, ID_Dosen, ID_Jurusan,Sks) VALUES 
("MK001","Learn Logic javascrpits","D001","J002", "5"),
("MK002","Learn sqlite3","D001","J001", "4"),
("MK003","Learn postgreSql", "D001","J001","4");

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
    ID_Jurusan VARCHAR (10) NOT NULL,
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
("M006","J002","Learn Logic javascrpits","5","A");

SELECT * FROM KRS;



