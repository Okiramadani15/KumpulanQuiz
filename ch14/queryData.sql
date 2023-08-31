CREATE TABLE Jurusan(
    ID_Jurusan VARCHAR(10) PRIMARY KEY NOT NULL,
    Nama_Jurusan VARCHAR(100) NOT NULL
);
    
INSERT INTO Jurusan (ID_Jurusan, Nama_Jurusan) VALUES
("J001","Sistem Informasi"),
("J002","Teknik Informasi"),
("J003","Analysis Data");

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
("M006", "rizal", "Sumedang","J002"),
("M007", "riko", "Semarang","J003"),
("M008", "uden", "medan","J003"),
("M009", "frans", "bandung","J003");

SELECT * FROM Mahasiswa;

CREATE TABLE Dosen(
    ID_Dosen VARCHAR(10) PRIMARY KEY NOT NULL,
    Nama_Dosen VARCHAR(100) NOT NULL
);

INSERT INTO Dosen (ID_Dosen,Nama_Dosen) VALUES 
("D001","Rubi Henjaya"),
("D002","Febri haryadi"),
("D003","Suhendra");

SELECT * FROM Dosen;

CREATE TABLE Mata_kuliah(
    ID_Matkul VARCHAR(10) PRIMARY KEY NOT NULL,
    Nama_Matkul VARCHAR(100) NOT NULL,
    Sks INTEGER (1)  NOT NULL
);

INSERT INTO Mata_kuliah (ID_Matkul,Nama_Matkul,Sks) VALUES 
("MK001","Javascripts",5),
("MK002","Database",4),
("MK003","Framework",4);

SELECT * FROM Mata_kuliah;

CREATE TABLE KRS(
    ID_KRS INTEGER PRIMARY KEY AUTOINCREMENT,
    Nim VARCHAR(10) NOT NULL,
    ID_Dosen VARCHAR(10) NOT NULL,
    ID_Matkul VARCHAR(100) NOT NULL,
    Nilai VARCHAR(2) DEFAULT "C",
    FOREIGN KEY(Nim) REFERENCES Mahasiswa (Nim),
    FOREIGN KEY(ID_Dosen) REFERENCES Dosen(ID_Dosen)
    FOREIGN KEY(ID_Matkul) REFERENCES Mata_kuliah (ID_Matkul)
);

INSERT INTO KRS (Nim,ID_Dosen,ID_Matkul) VALUES
("M001","D001","MK001"),
("M002","D001","MK002"),
("M003","D002","MK003"),
("M004","D003","MK003"),
("M005","D003","MK003"),
("M006","D002","MK002"),
("M007","D001","MK001"),
("M008","D002","MK001"),
("M009","D003","MK002"),
("M002","D002","MK001"),
("M003","D001","MK003"),
("M005","D001","MK001"),
("M001","D003","MK001"),
("M007","D001","MK002"),
("M008","D003","MK003"),
("M001","D002","MK003"),
("M005","D002","MK002"),
("M003","D001","MK002"),
("M002","D003","MK001");

SELECT * FROM KRS;

UPDATE KRS SET Nilai = "A" WHERE ID_KRS = 1;
UPDATE KRS SET Nilai = "A" WHERE ID_KRS = 2;
UPDATE KRS SET Nilai = "A" WHERE ID_KRS = 3;
UPDATE KRS SET Nilai = "A" WHERE ID_KRS = 4;
UPDATE KRS SET Nilai = "A" WHERE ID_KRS = 5;
UPDATE KRS SET Nilai = "A" WHERE ID_KRS = 6;
UPDATE KRS SET Nilai = "C" WHERE ID_KRS = 7;
UPDATE KRS SET Nilai = "B" WHERE ID_KRS = 8;
UPDATE KRS SET Nilai = "D" WHERE ID_KRS = 9; 

ALTER TABLE Mahasiswa ADD Tanggal_lahir DATE;
UPDATE Mahasiswa set Tanggal_lahir='1996-02-15' WHERE Nim='M001';
UPDATE Mahasiswa set Tanggal_lahir='1998-03-10' WHERE Nim='M002';
UPDATE Mahasiswa set Tanggal_lahir='1995-02-17' WHERE Nim='M003';
UPDATE Mahasiswa set Tanggal_lahir='1999-08-09' WHERE Nim='M004';
UPDATE Mahasiswa set Tanggal_lahir='1999-12-20' WHERE Nim='M005';
UPDATE Mahasiswa set Tanggal_lahir='2005-04-13' WHERE Nim='M006';
UPDATE Mahasiswa set Tanggal_lahir='2000-05-02' WHERE Nim='M007';
UPDATE Mahasiswa set Tanggal_lahir='2003-07-07' WHERE Nim='M008';
UPDATE Mahasiswa set Tanggal_lahir='1990-04-30' WHERE Nim='M009';



-- challenge 1 tampilkan seluruh data mahasiswa dan jurusannya. 
SELECT *, Jurusan.Nama_Jurusan FROM Mahasiswa LEFT JOIN Jurusan ON Mahasiswa.ID_Jurusan = Jurusan.ID_Jurusan;

-- challenge 2 tampilkan mahasiswa yang memiliki umur dibawah 20 tahun.
SELECT *,DATE('now')-DATE(Tanggal_lahir) AS Umur from Mahasiswa WHERE umur <= 20;

-- challenge 3 tampilkan mahasiswa yang memilki nilai 'B' keatas.
SELECT DISTINCT Nim,(SELECT Nama FROM Mahasiswa WHERE Mahasiswa.Nim = KRS.Nim) AS Nama FROM KRS WHERE Nilai >= 'B';

-- challenge 4 tampilkan mahasiswa yang memiliki jumlah sks leboh dari 10.
SELECT Mahasiswa.Nim, Mahasiswa.Nama, SUM(Mata_kuliah.Sks) AS Total_sks
FROM Mahasiswa
JOIN KRS ON Mahasiswa.Nim = KRS.Nim
JOIN Mata_kuliah ON KRS.ID_matkul = Mata_kuliah.ID_matkul
GROUP BY Mahasiswa.Nim, Mahasiswa.Nama
HAVING Total_sks > 10;

-- challenge 5  tampilkan mahasiswa yang memilki KRS mata kuliah 'Data mining'.
SELECT KRS.Nim, Mahasiswa.Nama AS Nama_mahasiswa, KRS.ID_matkul, Mata_kuliah.Nama_matkul AS Matkul
FROM KRS
JOIN Mahasiswa ON KRS.Nim = Mahasiswa.Nim
JOIN Mata_kuliah ON KRS.ID_matkul = Mata_kuliah.ID_matkul;

-- challenge 6 tampilkan jumlah mahasiswa untuk setiap dosen.
SELECT *, (SELECT COUNT(DISTINCT NIM) FROM KRS WHERE KRS.ID_Dosen = Dosen.ID_Dosen) AS Jumlah_mahasiswa FROM Dosen;

-- challenge 7 urutkan mahasiswa berdasarkan umurnya.
SELECT *,DATE('now')-DATE(Tanggal_lahir) AS Umur FROM Mahasiswa ORDER BY Umur ASC;

-- challenge 8 tampilkan KRS yang harus di ulang(D,E), serta tampilkan data mahasiswa jurusan dan dosen,
--secara lengkap. gunakan mode JOIN dan WHERE clause(solusi terdiri dari 2 syntax SQL). 
SELECT DISTINCT * FROM KRS JOIN Mahasiswa ON KRS.Nim = Mahasiswa.Nim JOIN Jurusan ON Jurusan.ID_jurusan = Mahasiswa.ID_Jurusan JOIN Dosen ON Dosen.ID_Dosen = KRS.ID_Dosen WHERE Nilai >= 'D';








