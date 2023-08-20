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
    ID_Matkul VARCHAR(10) PRIMARY KEY NOT NULL,
    Nama_Matkul VARCHAR(100) NOT NULL,
    Sks INTEGER (1)  NOT NULL
);

INSERT INTO Mata_kuliah (ID_Matkul,Nama_Matkul,Sks) VALUES 
("MK001","Javascripts",4),
("MK002","Database",4),
("MK003","Framework",4);

SELECT * FROM Mata_kuliah;

CREATE TABLE KRS(
    ID_KRS INTEGER PRIMARY KEY AUTOINCREMENT,
    Nim VARCHAR(10) NOT NULL,
    ID_Dosen VARCHAR(10) NOT NULL,
    Nilai VARCHAR(2) NOT NULL,
    FOREIGN KEY(Nim) REFERENCES Mahasiswa (Nim),
    FOREIGN KEY(ID_Dosen) REFERENCES Dosen(ID_Dosen)
);

INSERT INTO KRS (Nim,ID_Dosen,Nilai) VALUES
("M001","D001","A"),
("M002","D001","A"),
("M003","D001","A"),
("M004","D001","A"),
("M005","D001","A"),
("M006","D001","A");

SELECT * FROM KRS;



